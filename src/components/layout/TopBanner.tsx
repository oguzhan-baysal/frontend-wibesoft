"use client";

import { useState } from "react";
import Link from "next/link";

export const TopBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-black text-white text-center py-2 px-4 text-sm relative">
      <p className="inline-block">
        Sign up and get 20% off to your first order.{" "}
        <Link
          href="#"
          className="underline font-medium hover:text-gray-300 transition-colors"
          aria-label="Sign up for 20% off"
        >
          Sign Up Now
        </Link>
      </p>
      <button
        type="button"
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
        aria-label="Close banner"
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};
