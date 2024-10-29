import classes from "./input.module.css";

export default function Input({ filter, setFilter }) {
  return (
    <input
      type="text"
      className={classes.Input}
      placeholder="Search"
      value={filter.searchQuery}
      onChange={(event) => {
        setFilter({ ...filter, searchQuery: event.target.value });
      }}
    />
  );
}
