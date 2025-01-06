
type SortOrder = 'asc' | 'desc';

interface PaginationParams {
  page?: number;
  limit?: number;
}

interface FilterParams {
  [key: string]: any;
}

interface SortParams {
  field: string;
  order: SortOrder;
}

interface QueryOptions {
  pagination?: PaginationParams;
  filters?: FilterParams;
  sort?: SortParams;
  search?: {
    fields: string[];
    query: string;
  };
}

interface PaginatedResponse<T> {
  data: T[];
  metadata: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

export class QueryBuilder {
  private query: any = {};
  private options: any = {};
  private model: any;

  constructor(model: any) {
    this.model = model;
  }

  // Handle pagination
  paginate(params: PaginationParams = {}) {
    const page = Math.max(1, params.page || 1);
    const limit = Math.max(1, Math.min(params.limit || 10, 100)); // Max 100 items per page
    
    this.options.skip = (page - 1) * limit;
    this.options.limit = limit;
    
    return this;
  }

  // Handle filtering
  filter(filters: FilterParams = {}) {
    const validFilters: FilterParams = {};

    // Process each filter
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        // Handle range filters
        if (typeof value === 'object' && ('min' in value || 'max' in value)) {
          validFilters[key] = {};
          if ('min' in value) validFilters[key]['$gte'] = value.min;
          if ('max' in value) validFilters[key]['$lte'] = value.max;
        }
        // Handle array filters
        else if (Array.isArray(value)) {
          validFilters[key] = { $in: value };
        }
        // Handle regex search
        else if (typeof value === 'string' && value.startsWith('/') && value.endsWith('/')) {
          validFilters[key] = { $regex: value.slice(1, -1), $options: 'i' };
        }
        // Handle normal equality
        else {
          validFilters[key] = value;
        }
      }
    });

    this.query = { ...this.query, ...validFilters };
    return this;
  }

  // Handle sorting
  sort(params: SortParams) {
    if (params?.field) {
      this.options.sort = {
        [params.field]: params.order === 'desc' ? -1 : 1
      };
    }
    return this;
  }

  // Handle search across multiple fields
  search(searchParams?: { fields: string[], query: string }) {
    if (searchParams?.query && searchParams.fields.length > 0) {
      const searchRegex = { $regex: searchParams.query, $options: 'i' };
      const searchConditions = searchParams.fields.map(field => ({
        [field]: searchRegex
      }));
      
      this.query.$or = searchConditions;
    }
    return this;
  }

  // Execute the query and return paginated results
  async execute<T>(): Promise<PaginatedResponse<T>> {
    // Get total count
    const total = await this.model.count(this.query);
    
    // Get paginated data
    const data = await this.model
      .find(this.query)
      .skip(this.options.skip)
      .limit(this.options.limit)
      .sort(this.options.sort);

    // Calculate pagination metadata
    const page = Math.floor(this.options.skip / this.options.limit) + 1;
    const totalPages = Math.ceil(total / this.options.limit);

    return {
      data,
      metadata: {
        total,
        page,
        limit: this.options.limit,
        totalPages,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1
      }
    };
  }
}

// Helper function to parse query parameters
export function parseQueryParams(query: any): QueryOptions {
  return {
    pagination: {
      page: Number(query.page) || 1,
      limit: Number(query.limit) || 10
    },
    filters: query.filters ? JSON.parse(query.filters) : {},
    sort: query.sort ? JSON.parse(query.sort) : undefined,
    search: query.search ? JSON.parse(query.search) : undefined
  };
}