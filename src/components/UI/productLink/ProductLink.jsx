import classes from "./productLink.module.css";
import { Link } from "react-router-dom";

export default function ProductLink({ id, children }) {
  return (
    <Link to={`/product/${id}`} className={classes.ProductLink}>
      {children}
    </Link>
  );
}
