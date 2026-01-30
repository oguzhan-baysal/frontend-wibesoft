"use client";

import Image from "next/image";
import { QuantitySelector } from "@/components/ui";
import { useCartStore, type CartItem as CartItemType } from "@/store/useCartStore";
import { formatPrice } from "@/lib/utils";

interface CartItemProps {
  item: CartItemType;
}

export const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeItem } = useCartStore();

  const handleQuantityIncrease = () => {
    updateQuantity(item.id, item.quantity + 1, item.size, item.color);
  };

  const handleQuantityDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1, item.size, item.color);
    }
  };

  const handleRemove = () => {
    removeItem(item.id, item.size, item.color);
  };

  return (
    <div className="flex gap-4 py-6 border-b border-gray-200 last:border-b-0">
      {/* Product Image */}
      <div className="relative w-24 h-24 md:w-32 md:h-32 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
        <Image
          src={item.image || "/placeholder.png"}
          alt={item.title}
          fill
          className="object-contain p-2"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col justify-between min-w-0">
        <div className="flex justify-between items-start gap-2">
          <div className="min-w-0">
            <h3 className="font-medium text-sm md:text-base line-clamp-2 mb-1">
              {item.title}
            </h3>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs md:text-sm text-gray-600">
              {item.size && (
                <span>
                  Size: <span className="text-black">{item.size}</span>
                </span>
              )}
              {item.color && (
                <span>
                  Color: <span className="text-black">{item.color}</span>
                </span>
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={handleRemove}
            className="p-1 text-red-500 hover:text-red-600 transition-colors flex-shrink-0"
            aria-label={`Remove ${item.title} from cart`}
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
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>

        <div className="flex items-center justify-between mt-2">
          <span className="font-bold text-lg md:text-xl">
            {formatPrice(item.price * item.quantity)}
          </span>
          <QuantitySelector
            quantity={item.quantity}
            onIncrease={handleQuantityIncrease}
            onDecrease={handleQuantityDecrease}
            size="sm"
          />
        </div>
      </div>
    </div>
  );
};
