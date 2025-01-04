"use client";

import { ProductCard } from "@/components/products/product-card";

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    description: "High-quality wireless headphones with noise cancellation",
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 199.99,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    description: "Advanced smartwatch with health tracking features",
  },
  {
    id: 3,
    name: "Ultra HD Camera",
    price: 599.99,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80",
    description: "Professional-grade camera for stunning photography",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Featured Products
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
