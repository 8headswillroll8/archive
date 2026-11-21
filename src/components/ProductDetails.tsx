import fallbackImage from "../assets/images/fallback-image.webp";
import shoppingBagIcon from "../assets/graphics/shopping-bag-icon-white.svg";
import starIcon from "../assets/graphics/star-icon.svg";
import type { ProductProps } from "../types/ProductProps";

function ProductDetails({
  title,
  description,
  price,
  discountedPrice,
  image,
  rating,
  tags,
  reviews,
}: ProductProps) {
  const hasDiscount = discountedPrice < price;

  return (
    <article className="space-y-6 m-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-center lg:gap-12">
        <div>
          <img
            src={image.url}
            alt={image.alt}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = fallbackImage;
            }}
            className="aspect-square object-cover w-full md:max-w-120"
          />
        </div>
        <div className="space-y-5">
          <p className="text-brand-neutral-500 text-sm">
            {tags.join(", ").toUpperCase()}
          </p>
          <h1 className="text-2xl! md:text-[28px]!">{title}</h1>
          <p className="flex">
            <span>
              <img src={starIcon} alt="" />
            </span>
            {rating}
            <span className="pl-0.5 text-brand-neutral-500">
              ({reviews.length})
            </span>
          </p>
          <p>{description}</p>
          <div>
            <p className="text-2xl">{discountedPrice} kr</p>
            {hasDiscount && (
              <p className="line-through text-brand-neutral-500">{price} kr</p>
            )}
          </div>
          <button className="flex gap-2 items-center text-white bg-brand-accent rounded-md px-6 py-2 hover:font-medium">
            <span>
              <img src={shoppingBagIcon} alt="" className="w-4.5" />
            </span>
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductDetails;
