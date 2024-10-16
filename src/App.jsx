import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>Catalog</h1>
        <div className="productList">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
