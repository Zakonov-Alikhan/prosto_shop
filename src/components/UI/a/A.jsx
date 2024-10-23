import classes from "./A.module.css";

export default function A(props) {
  return (
    <a href={props.href} className={classes.A}>
      {props.children}
    </a>
  );
}
