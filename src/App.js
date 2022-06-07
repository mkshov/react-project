import './App.css'
import React from "react";
import Routing from "./Routing";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ProductsContextProvider from "./Contexts/productsContext";
import AuthContextProvider from './Contexts/authContext';
import CartContextProvider from './Contexts/cartContext';

function App() {
  return (
    <AuthContextProvider>
     <ProductsContextProvider>
      <CartContextProvider>
        <Header />
        <Routing />
        <Footer />
       </CartContextProvider>
     </ProductsContextProvider>
    </AuthContextProvider>
  );
}

export default App;
