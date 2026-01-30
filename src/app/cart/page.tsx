"use client";

import Link from "next/link";
import { CartItem, CartSummary } from "@/components/cart";
import { useCartStore } from "@/store/useCartStore";
import { Button } from "@/components/ui";

export default function CartPage() {
  const { items, getTotalItems } = useCartStore();
  const totalItems = getTotalItems();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-gray-600">
          <li>
            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li className="text-black font-medium">Cart</li>
        </ol>
      </nav>

      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-8">YOUR CART</h1>

      {items.length === 0 ? (
        /* Empty Cart */
        <div className="text-center py-16">
          <div className="w-24 h-24 mx-auto mb-6 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">
            Looks like you haven&apos;t added anything to your cart yet.
          </p>
          <Link href="/">
            <Button size="lg">Start Shopping</Button>
          </Link>
        </div>
      ) : (
        /* Cart with Items */
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-600">
                  {totalItems} {totalItems === 1 ? "item" : "items"} in cart
                </span>
              </div>
              <div className="divide-y divide-gray-200">
                {items.map((item, index) => (
                  <CartItem
                    key={`${item.id}-${item.size}-${item.color}-${index}`}
                    item={item}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <CartSummary />
            </div>
          </div>
        </div>
      )}

      {/* Spacer for footer */}
      <div className="h-24" />
    </div>
  );
}
