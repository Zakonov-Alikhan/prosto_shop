import products from "./products";
import { useState } from "react";
import "./App.css";
import Catalog from "./components/Catalog";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [filter, setFilter] = useState({ searchQuery: "", sort: "No filters" });
  // const [searchQuery, setSearchQuery] = useState("");
  const [productsList, setProductsList] = useState([...products]);

  return (
    <div className="App">
      <Header filter={filter} setFilter={setFilter} />
      <main>
        <Catalog
          filter={filter}
          setFilter={setFilter}
          productsList={productsList}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
