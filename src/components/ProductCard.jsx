import { useState } from "react";
import defaultProductImg from "../img/defaultProductImg.png";
import Button from "./UI/button/Button";
import A from "./UI/a/A";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

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
        <h3>
          <A
            href="https://www.youtube.com/watch?v=qRciIvSZTnA&list=LL&index=98"
            className="cardLink"
          >
            {title}
          </A>
        </h3>
        <div className="productCategory">{category}</div>
        <div className="productPrice">{price + "$"}</div>
        <Button>
          <FontAwesomeIcon icon={faCartShopping} className="CartSvg" />
        </Button>
      </div>
    </div>
  );
}
