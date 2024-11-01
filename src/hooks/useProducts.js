import { useMemo } from "react";

export const useProductFilter = (productsList, filterSort) => {
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

  return SortedProductList;
};

export const useProductSearch = (productsList, filterSort, searchQuery) => {
  const SortedProductList = useProductFilter(productsList, filterSort);

  const SearchedAndSortedProductList = useMemo(() => {
    return SortedProductList.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, SortedProductList]);

  return SearchedAndSortedProductList;
};
