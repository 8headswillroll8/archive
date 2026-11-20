import { BASE_URL } from "../api/config";
import type { ProductCardProps } from "../types/ProductCardProps";

async function getProducts(): Promise<ProductCardProps[]> {
  const response = await fetch(`${BASE_URL}/online-shop`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const result = await response.json();

  return result.data;
}

export default getProducts;
