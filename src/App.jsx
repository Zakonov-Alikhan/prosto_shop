import { useState } from "react";
import "./App.css";
import Catalog from "./components/Catalog";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="App">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main>
        <Catalog searchQuery={searchQuery} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
