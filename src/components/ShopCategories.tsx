import { Link } from "react-router-dom";
import imageCategory1 from "../assets/images/category-1.webp";
import imageCategory2 from "../assets/images/category-2.webp";
import arrowRight from "../assets/graphics/arrow-right.svg";
import arrowTopRight from "../assets/graphics/arrow-right-corner.svg";

function ShopCategories() {
  return (
    <section className="grid grid-cols-1 gap-6 m-6 md:gap-6 md:grid-cols-2">
      <div>
        <h2 className="pb-3">
          <span>
            <img
              src={arrowRight}
              alt=""
              className="inline-block h-4.5 px-2 md:h-5.5"
            ></img>
          </span>{" "}
          THINGS FOR YOU
        </h2>

        <Link to="/products?category=you">
          <div className="overflow-hidden">
            <img
              src={imageCategory1}
              alt="Glass skincare bottle with a yellow dropper on a round tray"
              className="aspect-square object-cover md:hover:scale-105 transition-transform duration-300"
            />
          </div>

          <p className="pt-3">
            Fashion, beauty, accessories, footwear
            <span>
              <img
                src={arrowTopRight}
                alt=""
                className="inline-block h-4.5 px-2 md:h-5.5"
              ></img>
            </span>{" "}
          </p>
        </Link>
      </div>

      <div>
        <h2 className="pb-3">
          <span>
            <img
              src={arrowRight}
              alt=""
              className="inline-block h-4.5 px-2 md:h-5.5"
            ></img>
          </span>{" "}
          THINGS FOR LIFE
        </h2>
        <Link to="/products?category=life">
          <div className="overflow-hidden">
            <img
              src={imageCategory2}
              alt="Smartphone, laptop and wireless earbuds arranged under purple lighting"
              className="aspect-square object-cover md:hover:scale-105 transition-transform duration-300"
            />
          </div>

          <p className="pt-3">
            Fashion, beauty, accessories, footwear
            <span>
              <img
                src={arrowTopRight}
                alt=""
                className="inline-block h-4.5 px-2 md:h-5.5"
              ></img>
            </span>{" "}
          </p>
        </Link>
      </div>
    </section>
  );
}

export default ShopCategories;
