import './App.css'
import React from "react";
import Routing from "./Routing";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ProductsContextProvider from "./Contexts/productsContext";

function App() {
  return (
    <ProductsContextProvider>
      <Header />
      <Routing />
      <Footer />
    </ProductsContextProvider>
  );
}

export default App;
