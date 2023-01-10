import React from "react";
import Annoucements from "../../components/Annoucements/Annoucements";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import "./ProductPage.scss";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Product = () => {
  return (
    <div className="productPage-container">
      <Navbar />
      <Annoucements />

      <div className="productPage-wrapper">
        <div className="img-container">
          <img
            className="image"
            src="https://images.unsplash.com/photo-1673280293847-97ad70e7512a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="info-container">
          <h1 className="title">Abc</h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            laborum eveniet autem dignissimos minima reiciendis, odio
            accusantium nesciunt distinctio, nisi placeat. Sed reiciendis autem
            temporibus quam! Labore illum adipisci ipsum.
          </p>
          <span className="price">RP. 200.000</span>
          <div className="filter-container">
            <div className="filter">
              <span className="filter-title">color</span>
              <div
                className="filter-color"
                style={{ backgroundColor: "red" }}
              />
              <div
                className="filter-color"
                style={{ backgroundColor: "blue" }}
              />
              <div
                className="filter-color"
                style={{ backgroundColor: "green" }}
              />
            </div>
            <div className="filter">
              <span className="filter-title">size</span>
              <select className="filter-size">
                <option className="filter-size-option">M</option>
                <option className="filter-size-option">L</option>
                <option className="filter-size-option">XL</option>
              </select>
            </div>
          </div>
          <div className="add-container">
            <div className="amount-container">
              <RemoveIcon />
              <span className="amount">1</span>
              <AddIcon />
            </div>
            <button className="button">add to cart</button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
