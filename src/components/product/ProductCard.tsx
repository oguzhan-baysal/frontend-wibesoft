"use client";

import Image from "next/image";
import Link from "next/link";
import { Rating } from "@/components/ui";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/api/generated";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { id, title, price, image, rating } = product;

  // API'deki rating kullan veya varsayılan değer ata
  const productRating = rating?.rate || 4.5;

  // Rastgele indirim hesapla (demo amaçlı)
  const hasDiscount = id ? id % 3 === 0 : false;
  const discountPercentage = hasDiscount ? 20 : 0;
  const originalPrice = price || 0;
  const discountedPrice = hasDiscount
    ? originalPrice * (1 - discountPercentage / 100)
    : originalPrice;

  return (
    <Link
      href={`/products/${id}`}
      className="group flex flex-col"
      aria-label={`View details for ${title}`}
      tabIndex={0}
    >
      {/* Product Image */}
      <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden mb-4">
        <Image
          src={image || "/placeholder.png"}
          alt={title || "Product image"}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-2">
        {/* Title */}
        <h3 className="font-medium text-sm md:text-base line-clamp-2 group-hover:text-gray-600 transition-colors">
          {title}
        </h3>

        {/* Rating */}
        <Rating rating={productRating} size="sm" showValue />

        {/* Price */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-bold text-lg md:text-xl">
            {formatPrice(discountedPrice)}
          </span>
          {hasDiscount && (
            <>
              <span className="text-gray-400 line-through text-sm">
                {formatPrice(originalPrice)}
              </span>
              <span className="bg-red-100 text-red-600 text-xs font-medium px-2 py-0.5 rounded-full">
                -{discountPercentage}%
              </span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};
