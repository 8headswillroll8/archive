import ProductDetails from "../components/ProductDetails";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import getProduct from "../api/getProduct";

function Product() {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id!),
    enabled: !!id,
  });

  if (isLoading) {
    return <p>Loading product...</p>;
  }

  if (isError) {
    return <p>Couldn't load product. Try again later.</p>;
  }

  if (!data) {
    return <p>Product not found.</p>;
  }

  return (
    <>
      <ProductDetails {...data} />
    </>
  );
}

export default Product;
