import ProductCard from "./ProductCard";
import Select from "./UI/select/Select";
import { useMemo, useState } from "react";

export default function Catalog({ productsList, filter, setFilter }) {
  const categoryList = [
    "No filters",
    "Electronics",
    "Sports",
    "Home Appliances",
    "Clothing",
  ];

  const filterSort = filter.sort;
  const searchQuery = filter.searchQuery;

  const SortedProductList = useMemo(() => {
    if (filterSort && filterSort === "No filters") {
      return productsList;
    }
    if (filterSort) {
      return productsList.filter((product) =>
        product.category.toLowerCase().includes(filterSort.toLowerCase())
      );
    }
  }, [filterSort, productsList]);

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
    return setFilter({ ...filter, sort: sort });
  }

  return (
    <>
      <div className="catalogHeader">
        <h1>Catalog</h1>
        <Select
          defaultValue="Filters"
          optionList={categoryList}
          value={filterSort}
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
