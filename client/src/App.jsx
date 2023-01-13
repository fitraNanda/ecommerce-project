import React from "react";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductList from "./pages/ProductList/ProductList";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Register />} path="/register" />
        <Route element={<Login />} path="/login" />
        <Route element={<Cart />} path="/cart" />
        <Route element={<ProductPage />} path="/product-page/:ProductId" />
        <Route element={<ProductList />} path="/product-list" />
        {/* <Route component={Admin} path="/admin" /> */}
        <Route element={<Home />} path="/" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
