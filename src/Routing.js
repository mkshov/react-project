import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProductForm from './Components/AddProductForm/AddProductForm';
import EditProductForm from './Components/EditProductForm/EditProductForm';
import LoginForm from './Components/LoginForm/LoginForm';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import ProductsList from './Components/ProductsList/ProductsList';
import RegisterForm from './Components/RegisterForm/RegisterForm';

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<LoginForm />} />
                <Route path='/register' element={<RegisterForm />}/>
                <Route path='/add-product' element={<AddProductForm />}/>
                <Route path='/products' element={<ProductsList />} />
                <Route path='/products/:id' element={<ProductDetails />} />
                <Route path='/edit/:id' element={<EditProductForm />} />


            </Routes>
        </BrowserRouter>
    );
};

export default Routing;