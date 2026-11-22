import PageBanner from "../components/PageBanner";
import { useQuery } from "@tanstack/react-query";
import getProducts from "../api/getProducts";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Sales() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const saleProducts = data?.filter(
    (product) => product.discountedPrice < product.price,
  );

  if (isLoading) {
    return <p>Loading products...</p>;
  }

  if (isError) {
    return <p>Couldn't load products. Try again later.</p>;
  }

  return (
    <section>
      <PageBanner title="SALES"></PageBanner>
      <div className="grid grid-cols-1 gap-6 px-6 pb-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {saleProducts?.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <ProductCard {...product} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Sales;
