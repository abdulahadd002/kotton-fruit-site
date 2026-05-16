"use client";

import Link from "next/link";
import { useCart } from "@/components/cart/CartContext";
import { cn } from "@/lib/cn";

export function CartDrawer() {
  const { open, setOpen, count } = useCart();

  return (
    <>
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close cart"
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-[80] bg-bg/60 backdrop-blur-sm transition-opacity duration-500",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Cart"
        className={cn(
          "fixed top-0 right-0 bottom-0 z-[90] w-full sm:w-[440px] bg-bg border-l border-line transition-transform duration-700 ease-out-expo flex flex-col",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <header className="flex items-center justify-between p-6 border-b border-line">
          <div>
            <p className="mono-label text-ink-dim">// CART</p>
            <p className="font-display text-2xl mt-1 leading-none">
              {count} {count === 1 ? "PIECE" : "PIECES"}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="mono-label text-ink hover:text-accent transition-colors"
          >
            Close ×
          </button>
        </header>

        {count === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <p className="display text-5xl text-ink leading-[0.9] mb-6">
              NOTHING
              <br />
              YET.
            </p>
            <p className="text-ink-dim max-w-[260px] mb-8">
              Drop 003 is live and stitched at home. Start there.
            </p>
            <Link
              href="/drops/drop-003"
              onClick={() => setOpen(false)}
              className="btn-brutal btn-brutal--solid"
            >
              Enter the drop
            </Link>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-6">
            {/* line items would render here */}
          </div>
        )}

        <footer className="p-6 border-t border-line">
          <div className="flex items-center justify-between mb-4">
            <span className="mono-label text-ink-dim">Subtotal</span>
            <span className="font-mono text-ink">PKR 0</span>
          </div>
          <button
            type="button"
            disabled={count === 0}
            className="btn-brutal btn-brutal--solid w-full justify-center disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Checkout
          </button>
          <p className="mono-label text-ink-dim text-center mt-3">
            Free shipping over PKR 6,000
          </p>
        </footer>
      </aside>
    </>
  );
}
