"use client";

import Link from "next/link";

interface StyleCategory {
  name: string;
  image: string;
  span: string;
}

const STYLE_CATEGORIES: StyleCategory[] = [
  {
    name: "Casual",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&h=300&fit=crop",
    span: "md:col-span-1 lg:col-span-1",
  },
  {
    name: "Formal",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=300&fit=crop",
    span: "md:col-span-1 lg:col-span-2",
  },
  {
    name: "Party",
    image: "https://images.unsplash.com/photo-1529903384028-929ae5dccdf1?w=600&h=300&fit=crop",
    span: "md:col-span-1 lg:col-span-2",
  },
  {
    name: "Gym",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop",
    span: "md:col-span-1 lg:col-span-1",
  },
];

export const BrowseByStyle = () => {
  return (
    <section className="py-12">
      <div className="bg-gray-100 rounded-3xl p-6 md:p-12">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
          BROWSE BY DRESS STYLE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {STYLE_CATEGORIES.map((style) => (
            <Link
              key={style.name}
              href={`/?category=${style.name.toLowerCase()}`}
              className={`${style.span} relative rounded-2xl overflow-hidden min-h-[200px] md:min-h-[250px] lg:min-h-[290px] group`}
              aria-label={`Browse ${style.name} style`}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${style.image})` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              {/* Content */}
              <div className="absolute inset-0 p-6 flex items-start">
                <span className="text-xl md:text-2xl lg:text-3xl font-bold text-black bg-white/80 px-3 py-1 rounded-lg">
                  {style.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
