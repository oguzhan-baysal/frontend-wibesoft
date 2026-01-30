import Link from "next/link";
import Image from "next/image";

export const HeroSection = () => {
  const stats = [
    { value: "200+", label: "International Brands" },
    { value: "2,000+", label: "High-Quality Products" },
    { value: "30,000+", label: "Happy Customers" },
  ];

  return (
    <section className="bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center min-h-[600px] lg:min-h-[700px]">
          {/* Text Content */}
          <div className="flex-1 py-12 lg:py-0 lg:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-gray-600 text-base md:text-lg mb-8 max-w-lg">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <Link
              href="/#products"
              className="inline-block bg-black text-white font-medium px-12 py-4 rounded-full hover:bg-gray-800 transition-colors"
              aria-label="Shop now"
            >
              Shop Now
            </Link>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 lg:gap-12 mt-12">
              {stats.map((stat, index) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl md:text-3xl lg:text-4xl font-bold">
                    {stat.value}
                  </span>
                  <span className="text-gray-600 text-xs md:text-sm">
                    {stat.label}
                  </span>
                  {index < stats.length - 1 && (
                    <div className="hidden lg:block absolute right-0 top-0 h-full w-px bg-gray-300" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative w-full min-h-[400px] lg:min-h-[600px]">
            <div className="absolute inset-0 flex items-end justify-center">
              {/* Placeholder for hero image - using a styled div */}
              <div className="relative w-full h-full flex items-end justify-center">
                <div className="absolute top-10 right-10 w-16 h-16 hidden lg:block">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path
                      d="M50 0 L61 39 L100 39 L69 63 L81 100 L50 78 L19 100 L31 63 L0 39 L39 39 Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="absolute top-32 left-10 w-12 h-12 hidden lg:block">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path
                      d="M50 0 L61 39 L100 39 L69 63 L81 100 L50 78 L19 100 L31 63 L0 39 L39 39 Z"
                      fill="black"
                    />
                  </svg>
                </div>
                {/* Hero image placeholder */}
                <div className="w-full h-full bg-gradient-to-b from-transparent to-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <svg
                      className="w-32 h-32 mx-auto mb-4 opacity-20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Logos */}
      <div className="bg-black py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 md:gap-8">
            {["VERSACE", "ZARA", "GUCCI", "PRADA", "Calvin Klein"].map(
              (brand) => (
                <span
                  key={brand}
                  className="text-white text-lg md:text-2xl font-bold tracking-wider"
                >
                  {brand}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
