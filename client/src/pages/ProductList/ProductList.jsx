import React from "react";
import Annoucements from "../../components/Annoucements/Annoucements";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";

import "./ProductList.scss";

const ProductList = () => {
  return (
    <div className="ProductList-container">
      <Navbar />
      <Annoucements />
      <h1 className="title">Kue</h1>
      <div className="filter-container">
        <div className="filter">
          <span className="filter-text">Filter Products:</span>
          <select className="select">
            <option className="option" disabled selected>
              color
            </option>
            <option className="option">white</option>
            <option className="option">black</option>
            <option className="option">red</option>
            <option className="option">blue</option>
          </select>
          <select className="select">
            <option className="option" disabled selected>
              size
            </option>
            <option className="option">XS</option>
            <option className="option">S</option>
            <option className="option">M</option>
            <option className="option">L</option>
            <option className="option">XL</option>
          </select>
        </div>
        <div className="filter">
          <span className="filter-text">Sort Products:</span>
          <select className="select">
            <option className="option" selected>
              Newest
            </option>
            <option className="option">Price(asc)</option>
            <option className="option">Price(desc)</option>
          </select>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
