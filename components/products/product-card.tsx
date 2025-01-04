import { Product } from "@/lib/data";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
<Link href={`/products/${product.id}`} className="block h-full w-full">
  <Card className="hover:shadow-lg transition-shadow h-full flex flex-col justify-between">
    <CardHeader>
      <div className="relative h-48 w-full mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-md"
        />
      </div>
    </CardHeader>
    <div className="px-4 pb-4 flex flex-col justify-between flex-grow">
      <div>
        <h3 className="text-lg font-bold">{product.name}</h3>
<p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
        </div>
      <p className="text-md font-semibold mt-2">${product.price}</p>
    </div>
  </Card>
</Link>

  );
}
