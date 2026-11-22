import Button from "../components/Button";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";
import { useCartStore } from "../stores/cartStore";

function Cart() {
  const items = useCartStore((state) => state.items);

  return (
    <div className="mx-auto w-full max-w-337.5 px-4">
      <div className="space-y-4 py-6">
        <h1 className="text-2xl! md:text-[34px]!">CART (3)</h1>

        <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
          {/* Cart items */}
          <div className="flex min-w-0 flex-1 flex-col gap-4">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* Cart summary */}
          <div className="w-full space-y-4 lg:w-1/3 lg:shrink-0">
            <CartSummary />
            <Button name="Proceed to checkout" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
