"use client";

import { useState, useRef } from "react";
import { Rating } from "@/components/ui";

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  verified: boolean;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    verified: true,
  },
  {
    id: 2,
    name: "Alex K.",
    rating: 5,
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    verified: true,
  },
  {
    id: 3,
    name: "James L.",
    rating: 5,
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    verified: true,
  },
  {
    id: 4,
    name: "Emily R.",
    rating: 5,
    text: "Shop.co has completely transformed my wardrobe! The quality is outstanding and the prices are very reasonable. I've recommended it to all my friends.",
    verified: true,
  },
  {
    id: 5,
    name: "Michael B.",
    rating: 4,
    text: "Great shopping experience from start to finish. The website is easy to navigate, shipping was fast, and the clothes fit perfectly. Will definitely be ordering again!",
    verified: true,
  },
];

export const HappyCustomers = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 300);
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    direction: "left" | "right"
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleScroll(direction);
    }
  };

  return (
    <section className="py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-4xl font-bold">OUR HAPPY CUSTOMERS</h2>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => handleScroll("left")}
            onKeyDown={(e) => handleKeyDown(e, "left")}
            disabled={!canScrollLeft}
            className="p-2 rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:border-gray-300 disabled:hover:text-current"
            aria-label="Scroll left"
            tabIndex={0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => handleScroll("right")}
            onKeyDown={(e) => handleKeyDown(e, "right")}
            disabled={!canScrollRight}
            className="p-2 rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:border-gray-300 disabled:hover:text-current"
            aria-label="Scroll right"
            tabIndex={0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Testimonials Slider */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide no-scrollbar snap-x snap-mandatory"
        role="region"
        aria-label="Customer testimonials"
      >
        {TESTIMONIALS.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex-shrink-0 w-[300px] md:w-[400px] bg-white border border-gray-200 rounded-2xl p-6 snap-start"
          >
            {/* Rating */}
            <Rating rating={testimonial.rating} showValue={false} size="md" />

            {/* Name with Verified Badge */}
            <div className="flex items-center gap-2 mt-4 mb-3">
              <span className="font-bold text-lg">{testimonial.name}</span>
              {testimonial.verified && (
                <span className="flex items-center justify-center w-5 h-5 bg-green-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              )}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
              &ldquo;{testimonial.text}&rdquo;
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
