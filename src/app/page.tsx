"use client";

import { HeroSection } from "@/components/home";
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

        {/* Browse by Style Section */}
        <section className="py-12">
          <div className="bg-gray-100 rounded-3xl p-6 md:p-12">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
              BROWSE BY DRESS STYLE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: "Casual", span: "lg:col-span-1" },
                { name: "Formal", span: "lg:col-span-2" },
                { name: "Party", span: "lg:col-span-2" },
                { name: "Gym", span: "lg:col-span-1" },
              ].map((style) => (
                <div
                  key={style.name}
                  className={`${style.span} bg-white rounded-2xl p-6 min-h-[200px] flex items-end hover:shadow-lg transition-shadow cursor-pointer`}
                  role="button"
                  tabIndex={0}
                  aria-label={`Browse ${style.name} style`}
                >
                  <span className="text-2xl font-bold">{style.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Spacer for footer newsletter overlap */}
        <div className="h-24" />
      </div>
    </>
  );
}
