import React, { useEffect } from "react";
import Annoucements from "../../components/Annoucements/Annoucements";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import "./ProductList.scss";
import { getProduct } from "../../redux/action/product";
import { connect } from "react-redux";

const ProductList = (props) => {
  useEffect(() => {
    props.getProduct();
  }, []);

  return (
    <div className="ProductList-container">
      <Annoucements />
      <Navbar />
      <div className="border"></div>
      <div className="filter-container">
        <div className="filter">
          <span className="filter-text">Filter Products:</span>
          <select className="select">
            <option className="option" disabled selected>
              Category
            </option>
            <option className="option">Kue</option>
            <option className="option">Sembako</option>
            <option className="option">Minuman</option>
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

const mapStateToProps = (state) => {
  return {
    productGlobal: state.product,
  };
};

const mapDispatchToProps = {
  getProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
