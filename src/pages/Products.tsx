import { useState } from "react";
import PageBanner from "../components/PageBanner";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";

function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <PageBanner />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProductCard />
    </>
  );
}

export default Products;
