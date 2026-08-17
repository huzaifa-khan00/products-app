import { useState } from "react";
import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import Faq from './pages/Faq';
import Layout from "./components/Layout";
import Products from "./pages/Products";
import Product from "./pages/Product";
import NotFound from "./components/NotFound.jsx";
import Cart from "./pages/Cart.jsx";
import RegistrationForm from "./pages/RegistrationForm.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";


function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Route>
        <Route>
        <Route path="/products" element={<Products />} />
        <Route path="/product-details/:prodId" element={<Product />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
