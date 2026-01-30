"use client";

import { ProductCard } from "./ProductCard";
import { ProductCardSkeleton, ErrorMessage } from "@/components/ui";
import type { Product } from "@/api/generated";

interface ProductGridProps {
  products: Product[] | undefined;
  isLoading: boolean;
  isError: boolean;
  onRetry?: () => void;
  title?: string;
  showViewAll?: boolean;
}

export const ProductGrid = ({
  products,
  isLoading,
  isError,
  onRetry,
  title,
  showViewAll = false,
}: ProductGridProps) => {
  if (isError) {
    return (
      <ErrorMessage
        title="Failed to load products"
        message="We couldn't load the products. Please check your connection and try again."
        onRetry={onRetry}
      />
    );
  }

  return (
    <section className="py-8 md:py-12">
      {title && (
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-4xl font-bold">{title}</h2>
          {showViewAll && (
            <button
              type="button"
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors px-4 py-2 border border-gray-200 rounded-full hover:border-black"
              tabIndex={0}
              aria-label="View all products"
            >
              View All
            </button>
          )}
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {isLoading
          ? Array.from({ length: 8 }, (_, i) => <ProductCardSkeleton key={i} />)
          : products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </section>
  );
};
