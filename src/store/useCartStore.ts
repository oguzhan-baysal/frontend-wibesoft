"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
  color?: string;
}

interface CartState {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
  removeItem: (id: number, size?: string, color?: string) => void;
  updateQuantity: (id: number, quantity: number, size?: string, color?: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
  getSubtotal: () => number;
  getDiscount: () => number;
}

const getItemKey = (id: number, size?: string, color?: string): string => {
  return `${id}-${size || "default"}-${color || "default"}`;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) => {
        set((state) => {
          const existingItemIndex = state.items.findIndex(
            (i) =>
              i.id === item.id &&
              i.size === item.size &&
              i.color === item.color
          );

          if (existingItemIndex > -1) {
            const updatedItems = [...state.items];
            updatedItems[existingItemIndex].quantity += item.quantity || 1;
            return { items: updatedItems };
          }

          return {
            items: [
              ...state.items,
              { ...item, quantity: item.quantity || 1 },
            ],
          };
        });
      },

      removeItem: (id, size, color) => {
        set((state) => ({
          items: state.items.filter(
            (item) =>
              !(item.id === id && item.size === size && item.color === color)
          ),
        }));
      },

      updateQuantity: (id, quantity, size, color) => {
        if (quantity < 1) {
          get().removeItem(id, size, color);
          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.id === id && item.size === size && item.color === color
              ? { ...item, quantity }
              : item
          ),
        }));
      },

      clearCart: () => {
        set({ items: [] });
      },

      getTotalPrice: () => {
        const state = get();
        const subtotal = state.getSubtotal();
        const discount = state.getDiscount();
        return subtotal - discount;
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getSubtotal: () => {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },

      getDiscount: () => {
        const subtotal = get().getSubtotal();
        // %20 indirim uygula (örnek)
        return subtotal * 0.2;
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
