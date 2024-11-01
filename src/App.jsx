import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import products from "./products";
import { useState } from "react";

function App() {
  const [filter, setFilter] = useState({ searchQuery: "", sort: "No filters" });
  const [productsList, setProductsList] = useState([...products]);

  return (
    <div className="App">
      <Header filter={filter} setFilter={setFilter} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              filter={filter}
              setFilter={setFilter}
              productsList={productsList}
              setProductsList={setProductsList}
            />
          }
        />
        <Route path="/CartPage" element={<CartPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
