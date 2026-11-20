import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "./ProductCard";
import fallbackImage from "../assets/images/fallback-image.webp";

const mockProduct = {
  id: "00-11-22-33-44",
  title: "Leather bag",
  price: 1299.99,
  discountedPrice: 999.99,
  image: {
    url: "https://images.pexels.com/photos/36367487/pexels-photo-36367487.jpeg",
    alt: "A brown leather bag, on top of a blue leather bag",
  },
  rating: 4.5,
  tags: ["fashion"],
  reviews: [
    {
      id: "55-66-77-88-99",
      username: "Ingrid",
      rating: 5,
      description: "The perfect everyday bag. I love it.",
    },
    {
      id: "11-22-33-44-55",
      username: "Emma",
      rating: 4,
      description: "Beautiful bag!",
    },
  ],
};

describe("ProductCard", () => {
  it("renders the product title", () => {
    render(<ProductCard {...mockProduct} />);

    const title = screen.getByText("Leather bag");

    expect(title).toBeInTheDocument();
  });

  it("displays a fallback image when the original fails to load", () => {
    render(<ProductCard {...mockProduct} />);

    const image = screen.getByRole("img", {
      name: "A brown leather bag, on top of a blue leather bag",
    });

    fireEvent.error(image);

    expect(image).toHaveAttribute("src", fallbackImage);
  });
});
