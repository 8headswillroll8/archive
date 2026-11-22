import starIcon from "../assets/graphics/star-icon.svg";
import type { ProductReviewProps } from "../types/ProductReviewProps";

function ProductReview({ reviews }: ProductReviewProps) {
  return (
    <section className="m-auto max-w-300 px-6 ">
      <hr className="w-full border-0 border-t border-brand-neutral-100 my-8" />
      <h2 className="mb-6 text-brand-neutral-500">CUSTOMER REVIEWS</h2>
      {reviews.length === 0 && (
        <p className="mb-8 text-brand-accent">
          No reviews yet. Be the first to have an opinion.
        </p>
      )}
      {reviews.map((review) => (
        <article key={review.id} className="flex flex-col space-y-3 mb-8">
          <p>"{review.description}"</p>

          <div className="flex gap-3">
            <p className="flex">
              <span>
                <img src={starIcon} alt="" />
              </span>
              {review.rating}
            </p>

            <p className="font-medium">- {review.username}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

export default ProductReview;
