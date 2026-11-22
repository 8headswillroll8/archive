import { useCartStore } from "../stores/cartStore";

function CartSummary() {
  const items = useCartStore((state) => state.items);

  const totalDiscount = items.reduce(
    (total, item) =>
      total + (item.price - item.discountedPrice) * item.quantity,
    0,
  );

  const totalPrice = items.reduce(
    (total, item) => total + item.discountedPrice * item.quantity,
    0,
  );

  const shipping = totalPrice > 999 ? 0 : 99;

  const finalTotal = totalPrice + shipping;

  const remaining = Math.max(0, 999 - totalPrice);

  return (
    <div className="space-y-4 bg-brand-neutral-100 rounded-md p-3 text-lg">
      <div className="flex justify-between">
        <p>Discount</p>
        <p>{totalDiscount.toFixed(2)} kr</p>
      </div>

      <div className="flex justify-between">
        <p>Total</p>
        <p>{finalTotal.toFixed(2)} kr</p>
      </div>

      <div className="flex justify-between">
        <p>Shipping</p>
        <p className={shipping === 0 ? "text-brand-accent" : ""}>
          {shipping === 0 ? "FREE :-)" : `${shipping} kr`}
        </p>
      </div>

      {remaining > 0 && (
        <p className="rounded-md bg-brand-main p-1 text-center">
          You're only <span className="font-bold">{remaining.toFixed(2)}</span>{" "}
          kr away from free shipping.
        </p>
      )}
    </div>
  );
}

export default CartSummary;
