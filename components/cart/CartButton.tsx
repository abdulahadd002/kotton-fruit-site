"use client";

import { useCart } from "@/components/cart/CartContext";

export function CartButton() {
  const { count, toggle } = useCart();
  return (
    <button
      type="button"
      onClick={toggle}
      data-cursor="CART"
      aria-label="Open cart"
      className="mono-label text-ink hover:text-accent transition-colors"
    >
      Cart ({count})
    </button>
  );
}
