import defaultProductImg from "../img/defaultProductImg.png";

export default function ProductCard({
  title = "Product title",
  category = "category",
  price = "300$",
  img = defaultProductImg,
}) {
  return (
    <div className="productCard">
      <img src={img} alt="Product Image" />
      <div className="productDescription">
        <h3>{title}</h3>
        <div className="">{category}</div>
        <div className="price">{price}</div>
        <button>Buy</button>
      </div>
    </div>
  );
}
