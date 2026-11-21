// import { useParams } from "react-router-dom";
// import getProduct from "../api/getProduct";

// // const { id } = useParams();

// //   const { data, isLoading, isError } = useQuery({
// //   queryKey: ["product"],
// //   queryFn: getProduct,
// // });

import fallbackImage from "../assets/images/fallback-image.webp";
import shoppingBagIcon from "../assets/graphics/shopping-bag-icon-white.svg";
import starIcon from "../assets/graphics/star-icon.svg";

function ProductDetails() {
  return (
    <article className="space-y-6 m-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-center lg:gap-6">
        <div>
          <img src={fallbackImage} alt="" />
        </div>
        <div className="space-y-5">
          <p className="text-brand-neutral-500 text-sm">BEAUTY</p>
          <h1 className="text-2xl! md:text-[28px]!">Vanilla Perfume</h1>
          <p className="flex">
            <span>
              <img src={starIcon} alt="" />
            </span>
            6<span className="pl-0.5 text-brand-neutral-500">(5)</span>
          </p>
          <p>
            Women's perfume that smells a warm and sweet, with nuances of wood
            and jasmine.
          </p>
          <div>
            <p className="text-2xl">500 kr</p>
            <p className="line-through text-brand-neutral-500">1000 kr</p>
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
