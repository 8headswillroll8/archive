import fallbackImage from "../assets/images/fallback-image.webp";
import trashIcon from "../assets/graphics/trash-icon.svg";
import type { CartItem as CartItemType } from "../types/CartItem";

interface CartItemProps {
  item: CartItemType;
}

function CartItem({ item }: CartItemProps) {
  return (
    <article className="flex gap-4 rounded-lg border border-brand-neutral-100 p-4 md:gap-6 md:items-center md:p-6">
      <div className="w-36 shrink-0 md:w-48">
        <img
          src={item.image.url}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = fallbackImage;
          }}
          className="aspect-square w-full object-cover"
          alt={item.image.alt}
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-xl">{item.title}</h2>
          <p className="text-lg">{item.discountedPrice}</p>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <div className="flex max-h-10 w-32 items-center justify-between rounded-md bg-brand-neutral-100 px-4 py-2">
            <button type="button" aria-label="Decrease quantity">
              -
            </button>

            <span className="text-lg">{item.quantity}</span>

            <button type="button" aria-label="Increase quantity">
              +
            </button>
          </div>

          <button
            type="button"
            aria-label="Remove product"
            className="shrink-0"
          >
            <img src={trashIcon} alt="" className="w-4" />
          </button>
        </div>
      </div>
    </article>
  );
}

export default CartItem;
