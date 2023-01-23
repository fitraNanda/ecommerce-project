import React, { useState } from "react";
import Annoucements from "../../components/Annoucements/Annoucements";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import "./ProductPage.scss";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { connect } from "react-redux";
import { API_URL } from "../../constant/API_URL";

const Product = (props) => {
  return (
    <div className="productPage-container">
      <Annoucements />
      <Navbar />
      <div
        className="border"
        style={{ borderTop: "1px solid lightgray", width: "100%" }}
      ></div>
      <div className="productPage-wrapper">
        <div className="img-container">
          <img
            className="image"
            src={`${API_URL}/${props.singleProduct[0].image}`}
            alt=""
          />
        </div>
        <div className="info-container">
          <h1 className="title">{props.singleProduct[0].name}</h1>
          <p className="description">{props.singleProduct[0].description}</p>
          <span className="price">{props.singleProduct[0].price}</span>

          <div className="add-container">
            <div className="amount-container">
              <RemoveIcon />
              <span className="amount">99</span>
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

const mapStateToProps = (state) => {
  return {
    singleProduct: state.singleProduct,
  };
};
export default connect(mapStateToProps)(Product);
