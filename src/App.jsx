import "./App.css";
import Catalog from "./components/Catalog";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Catalog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
