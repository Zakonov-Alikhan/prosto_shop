import ProductCard from "./ProductCard";
import products from "../products";
import Select from "./UI/select/Select";
import { useMemo, useState } from "react";

export default function Catalog({ searchQuery }) {
  const [productsList, setProductsList] = useState([...products]);
  const [filter, setFilter] = useState("No filters");

  const categoryList = [
    "No filters",
    "Electronics",
    "Sports",
    "Home Appliances",
    "Clothing",
  ];

  const SortedProductList = useMemo(() => {
    if (filter && filter === "No filters") {
      return productsList;
    }
    if (filter) {
      return productsList.filter((product) =>
        product.category.toLowerCase().includes(filter.toLowerCase())
      );
    }
  }, [filter, productsList]);

  const SearchedAndSortedProductList = useMemo(() => {
    return SortedProductList.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, SortedProductList]);

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

      {SearchedAndSortedProductList.length ? (
        <div className="productList">
          {renderProductCard(SearchedAndSortedProductList)}
        </div>
      ) : (
        <div className="empty-state">No products found.</div>
      )}
    </>
  );
}
