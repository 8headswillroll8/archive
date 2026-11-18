import { Link } from "react-router-dom";
import arrow from "../assets/graphics/arrow-right-corner.svg";

function Hero() {
  return (
    <section className="flex flex-col justify-center gap-3 h-85 m-6 p-6 md:p-8 bg-(image:--color-brand-gradient) ">
      <h1>GOOD TASTE IS SUBJECTIVE</h1>

      <Link to="/products">
        <p className="text-2xl md:text-3xl">
          An assortment of things worth considering
          <span>
            <img
              src={arrow}
              alt=""
              className="inline-block h-4.5 px-2 md:h-5.5"
            ></img>
          </span>{" "}
        </p>
      </Link>
    </section>
  );
}

export default Hero;
