import type { CartItem } from "../types/CartItem";
import { create } from "zustand";

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  updateQuantity: (id: string, change: number) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addItem: (item) => {
    set((state) => {
      const existingItem = state.items.find(
        (cartItem) => cartItem.id === item.id,
      );

      if (existingItem) {
        return {
          items: state.items.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem,
          ),
        };
      }

      return {
        items: [...state.items, { ...item, quantity: 1 }],
      };
    });
  },
  updateQuantity: (id, change) => {
    set((state) => {
      return {
        items: state.items.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: Math.max(1, cartItem.quantity + change) }
            : cartItem,
        ),
      };
    });
  },
}));
