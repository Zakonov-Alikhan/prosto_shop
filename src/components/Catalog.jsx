import ProductCard from "./ProductCard";
import products from "../products";
import Select from "./UI/select/Select";
import { useMemo, useState } from "react";

export default function Catalog() {
  const [productsList, setProductsList] = useState([...products]);
  const [filter, setFilter] = useState("No filters");

  const SortedProductList = useMemo(() => {
    if (filter && filter === "No filters") {
      return renderProductCard(productsList);
    }
    if (filter) {
      const sortedProductsList = productsList.filter((product) =>
        product.category.includes(filter)
      );
      return renderProductCard(sortedProductsList);
    }
  }, [filter, productsList]);

  function renderProductCard(productsList = []) {
    return productsList.map((product) => toHTML(product));
  }

  function toHTML(product) {
    return (
      <ProductCard
        title={product.title}
        category={product.category}
        price={product.price}
        img={product.img}
        key={product.title + product.price}
      />
    );
  }

  const categoryList = [
    "No filters",
    "Electronics",
    "Sports",
    "Home Appliances",
    "Clothing",
  ];

  function filterRender(sort) {
    return setFilter(sort);
  }

  return (
    <>
      <div className="catalogHeader">
        <h1>Catalog</h1>
        <Select
          defaultValue="Filters"
          optionList={categoryList}
          value={filter}
          onChange={filterRender}
        ></Select>
      </div>

      {SortedProductList.length ? (
        <div className="productList">{SortedProductList}</div>
      ) : (
        <div className="empty-state">No products found.</div>
      )}
    </>
  );
}
