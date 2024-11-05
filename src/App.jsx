import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Catalog from "./pages/Catalog";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Page404 from "./pages/Page404";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [filter, setFilter] = useState({ searchQuery: "", sort: "No filters" });
  const [productsList, setProductsList] = useState([]);

  async function getProducts() {
    try {
      let response = await fetch("http://localhost:5000/products");
      let data = await response.json();
      setProductsList(data);
      // console.log(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    getProducts(); // Вызов при монтировании компонента
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header filter={filter} setFilter={setFilter} />
        <Routes>
          <Route
            path="/"
            element={
              <Catalog
                filter={filter}
                setFilter={setFilter}
                productsList={productsList}
                setProductsList={setProductsList}
              />
            }
          />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
