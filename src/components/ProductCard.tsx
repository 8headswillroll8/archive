import starIcon from "../assets/graphics/star-icon.svg";
import type { ProductCardProps } from "../types/ProductCardProps";

function ProductCard({
  title,
  price,
  discountedPrice,
  image,
  rating,
  tags,
  reviews,
}: ProductCardProps) {
  const hasDiscount = discountedPrice < price;
  const discountPercentage = Math.round(
    ((price - discountedPrice) / price) * 100,
  );

  return (
    <article className="space-y-2">
      <div className="relative">
        {hasDiscount && (
          <span className="absolute right-4 top-4 rounded-md bg-brand-main py-1 px-2">
            {discountPercentage}%
          </span>
        )}
        <img
          src={image.url}
          alt={image.alt}
          className="aspect-square object-cover w-full"
        />
      </div>
      <div className="flex justify-between">
        <p className="text-brand-neutral-500">{tags.join(", ")}</p>
        <p className="flex">
          <span>
            <img src={starIcon} alt="" />
          </span>
          {rating}
          <span className="pl-0.5">({reviews.length})</span>
        </p>
      </div>
      <h3 className="font-medium">{title}</h3>
      <div className="flex gap-2 items-center">
        <p className="font-medium text-xl">{discountedPrice} kr</p>
        {hasDiscount && (
          <p className="line-through text-brand-neutral-500">{price} kr</p>
        )}
      </div>
      {hasDiscount && (
        <span className="inline-block rounded-md bg-brand-main py-1 px-2">
          Saving {Math.round(price - discountedPrice)} kr
        </span>
      )}
    </article>
  );
}

export default ProductCard;
