"use client";

import { useState } from "react";
import { Button } from "@/components/ui";
import { useCartStore } from "@/store/useCartStore";
import { formatPrice } from "@/lib/utils";

export const CartSummary = () => {
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState(false);

  const { getSubtotal, getDiscount, getTotalPrice } = useCartStore();

  const subtotal = getSubtotal();
  const discount = getDiscount();
  const deliveryFee = subtotal > 0 ? 15 : 0;
  const totalBeforeDelivery = getTotalPrice();
  const total = totalBeforeDelivery + deliveryFee;

  const handlePromoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPromoCode(e.target.value);
  };

  const handleApplyPromo = () => {
    if (promoCode.trim()) {
      setAppliedPromo(true);
      // Demo amaçlı - gerçek promo code kontrolü yapılmıyor
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleApplyPromo();
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6">
      <h2 className="text-xl font-bold mb-6">Order Summary</h2>

      <div className="space-y-4">
        {/* Subtotal */}
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">{formatPrice(subtotal)}</span>
        </div>

        {/* Discount */}
        <div className="flex justify-between items-center text-red-500">
          <span>Discount (-20%)</span>
          <span>-{formatPrice(discount)}</span>
        </div>

        {/* Delivery Fee */}
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Delivery Fee</span>
          <span className="font-medium">{formatPrice(deliveryFee)}</span>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium">Total</span>
            <span className="text-xl font-bold">{formatPrice(total)}</span>
          </div>
        </div>

        {/* Promo Code */}
        <div className="pt-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Add promo code"
                value={promoCode}
                onChange={handlePromoChange}
                onKeyDown={handleKeyDown}
                className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-black"
                aria-label="Promo code input"
              />
            </div>
            <Button
              onClick={handleApplyPromo}
              variant="primary"
              size="md"
              disabled={!promoCode.trim()}
            >
              Apply
            </Button>
          </div>
          {appliedPromo && (
            <p className="text-green-600 text-sm mt-2">
              Promo code applied successfully!
            </p>
          )}
        </div>

        {/* Checkout Button */}
        <Button
          fullWidth
          size="lg"
          className="mt-4"
          onClick={() => alert("Checkout functionality coming soon!")}
        >
          Go to Checkout
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};
