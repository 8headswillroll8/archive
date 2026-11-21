import { BASE_URL } from "../api/config";
import type { ProductProps } from "../types/ProductProps";

async function getProduct(id: string): Promise<ProductProps> {
  const response = await fetch(`${BASE_URL}/online-shop/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  const result = await response.json();

  return result.data;
}

export default getProduct;
