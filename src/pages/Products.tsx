import { useState } from "react";
import PageBanner from "../components/PageBanner";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import { useQuery } from "@tanstack/react-query";
import getProducts from "../api/getProducts";
import { Link } from "react-router-dom";

function Products() {
  const [searchTerm, setSearchTerm] = useState("");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const filteredProducts = data?.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (isLoading) {
    return <p>Loading products...</p>;
  }

  if (isError) {
    return <p>Couldn't load products. Try again later.</p>;
  }

  return (
    <>
      <PageBanner title="SHOP" />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <section className="grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts?.length === 0 && (
          <p className="col-span-full py-3 text-brand-accent">
            No matches. We checked twice. ¯\_(ツ)_/¯
          </p>
        )}
        {filteredProducts?.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <ProductCard {...product} />
          </Link>
        ))}
      </section>
    </>
  );
}

export default Products;
