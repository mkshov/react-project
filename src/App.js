import './App.css'
import React from "react";
import Routing from "./Routing";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ProductsContextProvider from "./Contexts/productsContext";
import AuthContextProvider from './Contexts/authContext';

function App() {
  return (
    <AuthContextProvider>
    <ProductsContextProvider>
      <Header />
      <Routing />
      <Footer />
    </ProductsContextProvider>
    </AuthContextProvider>
  );
}

export default App;
