import Link from "next/link";

export const HeroSection = () => {
  const stats = [
    { value: "200+", label: "International Brands" },
    { value: "2,000+", label: "High-Quality Products" },
    { value: "30,000+", label: "Happy Customers" },
  ];

  return (
    <section className="bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center py-8 lg:py-0 lg:min-h-[600px]">
          {/* Text Content */}
          <div className="flex-1 py-8 lg:py-12 lg:pr-8 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <Link
              href="/#products"
              className="inline-block bg-black text-white font-medium px-8 sm:px-12 py-3 sm:py-4 rounded-full hover:bg-gray-800 transition-colors text-sm sm:text-base"
              aria-label="Shop now"
            >
              Shop Now
            </Link>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 mt-8 lg:mt-12">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center lg:items-start ${
                    index < stats.length - 1
                      ? "pr-4 sm:pr-6 lg:pr-8 border-r border-gray-300"
                      : ""
                  }`}
                >
                  <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                    {stat.value}
                  </span>
                  <span className="text-gray-600 text-xs sm:text-sm whitespace-nowrap">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image Area */}
          <div className="flex-1 relative w-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] hidden sm:flex items-center justify-center">
            {/* Decorative stars */}
            <div className="absolute top-4 right-8 lg:top-10 lg:right-16 w-8 h-8 lg:w-16 lg:h-16">
              <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
                <path
                  d="M50 0 L61 39 L100 39 L69 63 L81 100 L50 78 L19 100 L31 63 L0 39 L39 39 Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="absolute bottom-16 left-8 lg:bottom-32 lg:left-16 w-6 h-6 lg:w-12 lg:h-12">
              <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
                <path
                  d="M50 0 L61 39 L100 39 L69 63 L81 100 L50 78 L19 100 L31 63 L0 39 L39 39 Z"
                  fill="black"
                />
              </svg>
            </div>
            {/* Hero image placeholder */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center text-gray-300">
                <svg
                  className="w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 mx-auto opacity-30"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                <p className="text-sm mt-2 opacity-50">Fashion Model</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Logos */}
      <div className="bg-black py-4 sm:py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:justify-between">
            {["VERSACE", "ZARA", "GUCCI", "PRADA", "Calvin Klein"].map(
              (brand) => (
                <span
                  key={brand}
                  className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl font-bold tracking-wider"
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
