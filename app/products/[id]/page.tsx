// "use client";

// import { products } from "@/lib/data";
// import { Button } from "@/components/ui/button";
// import { Star } from "lucide-react";
// import Image from "next/image";
// import { notFound } from "next/navigation";



// export async function generateStaticParams() {
//   return products.map((product) => ({
//     id: product.id.toString()
//   }))
// }


// export default function ProductPage({ params }: { params: { id: string } }) {
//   const product = products.find(p => p.id === parseInt(params.id));

//   if (!product) {
//     notFound();
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="relative h-96 md:h-[600px]">
//           <Image
//             src={product.image}
//             alt={product.name}
//             fill
//             className="object-cover rounded-lg"
//           />
//         </div>
//         <div>
//           <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//           <div className="flex items-center mb-4">
//             {Array.from({ length: Math.floor(product.rating) }).map((_, i) => (
//               <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
//             ))}
//             <span className="ml-2 text-gray-600">({product.rating})</span>
//           </div>
//           <p className="text-3xl font-bold text-primary mb-6">${product.price}</p>
//           <p className="text-gray-600 mb-6">{product.description}</p>
          
//           {product.details && (
//             <>
//               <h2 className="text-xl font-semibold mb-4">Features</h2>
//               <ul className="list-disc list-inside mb-6">
//                 {product.details.features.map((feature, index) => (
//                   <li key={index} className="text-gray-600 mb-2">{feature}</li>
//                 ))}
//               </ul>

//               <h2 className="text-xl font-semibold mb-4">Specifications</h2>
//               <dl className="grid grid-cols-2 gap-4 mb-6">
//                 {Object.entries(product.details.specifications).map(([key, value]) => (
//                   <div key={key}>
//                     <dt className="font-medium text-gray-900">{key}</dt>
//                     <dd className="text-gray-600">{value}</dd>
//                   </div>
//                 ))}
//               </dl>
//             </>
//           )}
          
//           <Button size="lg" className="w-full md:w-auto">Add to Cart</Button>
//         </div>
//       </div>
//     </div>
//   );
// }



// app/products/[id]/page.tsx
import { products } from "@/lib/data";
import { notFound } from "next/navigation";
import ProductDetails from "./ProductDetails";

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString()
  }))
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === parseInt(params.id));

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}