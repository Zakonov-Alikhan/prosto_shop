import { useState } from "react";
import defaultProductImg from "../img/defaultProductImg.png";

export default function ProductCard({
  title = "Product title",
  category = "category",
  price = 300,
  img = defaultProductImg,
}) {
  const [isLoading, setIsLoading] = useState(true);

  function HideSkeleton() {
    setIsLoading(false);
  }

  return (
    <div className="productCard">
      <div className="skeleton-container">
        {isLoading && <div className="skeleton"></div>}
        <img
          src={img}
          alt="Product Image"
          loading="lazy"
          onLoad={HideSkeleton}
          className="productImage"
        />
      </div>

      <div className="productDescription">
        <h3>{title}</h3>
        <div className="">{category}</div>
        <div className="price">{price + "$"}</div>
        <button>Buy</button>
      </div>
    </div>
  );
}
