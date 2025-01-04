// Types
export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  // categoryId: number;
  details?: {
    features: string[];
    specifications: Record<string, string>;
  };
}

export interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
}

// Data
export const categories: Category[] = [
  {
    id: 1,
    name: "Audio",
    description: "High-quality headphones and speakers",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80"
  },
  {
    id: 2,
    name: "Wearables",
    description: "Smart watches and fitness trackers",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80"
  },
  {
    id: 3,
    name: "Cameras",
    description: "Professional cameras and accessories",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80"
  }
];

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    description: "High-quality wireless headphones with noise cancellation",
    details: {
      features: [
        "Active Noise Cancellation",
        "40-hour battery life",
        "Premium sound quality",
        "Bluetooth 5.0"
      ],
      specifications: {
        "Battery Life": "40 hours",
        "Connectivity": "Bluetooth 5.0",
        "Weight": "250g",
        "Warranty": "2 years"
      }
    }
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 199.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    description: "Advanced smartwatch with health tracking features",
    details: {
      features: [
        "Heart Rate Monitoring",
        "GPS Tracking",
        "Waterproof (50m)",
        "Customizable Watch Faces"
      ],
      specifications: {
        "Battery Life": "7 days",
        "Display": "AMOLED",
        "Weight": "50g",
        "Warranty": "1 year"
      }
    }
  },
  {
    id: 3,
    name: "Ultra HD Camera",
    price: 599.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80",
    description: "Professional-grade camera for stunning photography",
    details: {
      features: [
        "24MP Ultra HD Sensor",
        "4K Video Recording",
        "Interchangeable Lenses",
        "Wi-Fi & Bluetooth Connectivity"
      ],
      specifications: {
        "Resolution": "24MP",
        "Video Quality": "4K",
        "Weight": "700g",
        "Warranty": "3 years"
      }
    }
  }
];
