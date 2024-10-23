import classes from "./button.module.css";

export default function Button(props) {
  return (
    <button type="text" className={classes.Btn}>
      {props.children}
    </button>
  );
}
