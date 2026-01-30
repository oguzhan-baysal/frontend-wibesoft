"use client";

import { HeroSection, BrowseByStyle, HappyCustomers } from "@/components/home";
import { ProductGrid } from "@/components/product";
import { useGetAllProducts } from "@/api/generated";

export default function HomePage() {
  const { data: products, isLoading, isError, refetch } = useGetAllProducts();

  // İlk 8 ürünü "New Arrivals" olarak göster
  const newArrivals = products?.slice(0, 8);
  // Sonraki 4 ürünü "Top Selling" olarak göster
  const topSelling = products?.slice(8, 12);

  return (
    <>
      <HeroSection />

      <div className="container mx-auto px-4">
        {/* New Arrivals Section */}
        <div id="products">
          <ProductGrid
            products={newArrivals}
            isLoading={isLoading}
            isError={isError}
            onRetry={() => refetch()}
            title="NEW ARRIVALS"
            showViewAll
          />
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-4" />

        {/* Top Selling Section */}
        <ProductGrid
          products={topSelling}
          isLoading={isLoading}
          isError={isError}
          onRetry={() => refetch()}
          title="TOP SELLING"
          showViewAll
        />

        {/* Browse by Dress Style Section */}
        <BrowseByStyle />

        {/* Happy Customers Section */}
        <HappyCustomers />

        {/* Spacer for footer newsletter overlap */}
        <div className="h-24" />
      </div>
    </>
  );
}
