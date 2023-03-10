import React, { useEffect } from "react";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductList from "./pages/ProductList/ProductList";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "./pages/Authentication/Authentication";
import { connect } from "react-redux";
import { loginUser } from "./redux/action/user";
import { getProduct } from "./redux/action/product";
import { getCartKeep } from "./redux/action/cart";
import Admin from "./pages/Admin/Admin";
import AdminPage from "./pages/AdminPage/AdminPage";
import AdminPageDel from "./pages/AdminPageDel/AdminPageDel";
import AdminPageUpdate from "./pages/AdminPageUpdate/AdminPageUpdate";

const App = (props) => {
  useEffect(() => {
    props.getProduct();
    const dataCart = JSON.parse(localStorage.getItem("cart"));
    if (dataCart) {
      props.getCartKeep(dataCart);
    }

    const userLocalStorage = localStorage.getItem("user");
    if (userLocalStorage) {
      props.loginUser(JSON.parse(userLocalStorage));
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Register />} path="/register" />
        <Route element={<Login />} path="/login" />
        <Route element={<Cart />} path="/cart" />
        <Route element={<ProductPage />} path="/product-page/:productId" />
        <Route element={<ProductList />} path="/product-list" />
        <Route element={<Admin />} path="/admin" />
        <Route element={<AdminPage />} path="/admin/page" />
        <Route element={<AdminPageDel />} path="/admin/page/del" />
        <Route element={<AdminPageUpdate />} path="/admin/page/update" />
        <Route element={<Authentication />} path="authentication/:token" />
        <Route element={<Home />} path="/" />
      </Routes>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    userGlobal: state.user,
    productGlobal: state.product,
    cartGlobal: state.cart,
  };
};

const mapDispatchToProps = {
  loginUser,
  getProduct,
  getCartKeep,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
