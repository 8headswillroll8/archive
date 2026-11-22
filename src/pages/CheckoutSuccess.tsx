import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function CheckoutSuccess() {
  const navigate = useNavigate();

  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-4 py-20 text-center">
      <span className="text-brand-main text-5xl">ヘ( ^o^)ノ</span>

      <h1>You have excellent taste. We knew.</h1>

      <p className="text-lg text-brand-neutral-500">Your order is confirmed.</p>

      <div className="mt-4 w-full max-w-xs">
        <Button
          name="Continue shopping"
          onClick={() => navigate("/products")}
        />
      </div>
    </section>
  );
}

export default CheckoutSuccess;
