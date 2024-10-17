import ProductCard from "./ProductCard";
import products from "../products";

export default function Catalog() {
  function renderProductCard(products = []) {
    return products.map((product) => toHTML(product));
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

  return (
    <>
      <h1>Catalog</h1>
      <div className="productList">{renderProductCard(products)}</div>
    </>
  );
}
