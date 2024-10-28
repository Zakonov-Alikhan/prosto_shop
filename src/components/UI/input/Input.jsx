import classes from "./input.module.css";

export default function Input({ searchQuery, setSearchQuery }) {
  return (
    <input
      type="text"
      className={classes.Input}
      placeholder="Search"
      value={searchQuery}
      onChange={(event) => {
        setSearchQuery(event.target.value);
      }}
    />
  );
}
