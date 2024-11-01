import "../App.css";
import Catalog from "../components/Catalog";

function HomePage({ filter, setFilter, productsList, setProductsList }) {
  return (
    <main>
      <Catalog
        filter={filter}
        setFilter={setFilter}
        productsList={productsList}
      />
    </main>
  );
}

export default HomePage;
