'use client'
import { useState } from "react";
import { ProductCard } from "@/components/products/product-card";

type Product = {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  description: string;
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const queryParams = new URLSearchParams({
        page: "1",
        limit: "10",
        filters: JSON.stringify({
          category: "electronics",
          price: { min: 100, max: 1000 },
        }),
        sort: JSON.stringify({
          field: "price",
          order: "desc",
        }),
        search: JSON.stringify({
          fields: ["name", "description"],
          query: "wireless",
        }),
      });
      const response = await fetch(`/api/products`);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      setProducts(data.data);
    } catch (error: any) {
      setError(error.message || "Failed to fetch products");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Featured Products
          </h1>

          <button
            onClick={fetchProducts}
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Load Products
          </button>

          {isLoading && (
            <div className="text-center text-gray-500">Loading products...</div>
          )}
          {error && (
            <div className="text-center text-red-500">{error}</div>
          )}
          {!isLoading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.length > 0 ? (
                products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <div className="text-center text-gray-500">
                  No products found.
                </div>
              )}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
