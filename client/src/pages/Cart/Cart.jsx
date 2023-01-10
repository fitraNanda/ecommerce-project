import React from "react";
import "./Cart.scss";
import Annoucements from "../../components/Annoucements/Annoucements";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Cart = () => {
  return (
    <div className="cart-container">
      <Navbar />
      <Annoucements />

      <div className="cart-wrapper">
        <h1 className="title">Your Cart</h1>
        <div className="top">
          <button
            className="top-button"
            style={{ backgroundColor: "transparent" }}
          >
            Continue Shopping
          </button>
          <div className="top-texts">
            <span className="top-text">Shopping Cart(2)</span>
            <span className="top-text">Your Whistlist(0)</span>
          </div>
          <button
            className="top-button"
            style={{ border: "none", backgroundColor: "black", color: "white" }}
          >
            Checkout Now
          </button>
        </div>
        <div className="bottom">
          <div className="info">
            <div className="product">
              <div className="product-detail">
                <img
                  src="https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmVlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  className="image"
                  alt=""
                />
                <div className="details">
                  <span className="product-name">
                    <b>Product:</b>
                    Minuman
                  </span>
                  <span className="product-id">
                    <b>ID:</b>
                    89796875
                  </span>
                  <div
                    className="product-color"
                    style={{ backgroundColor: "orange" }}
                  />
                  <span className="product-size">
                    <b>Size:</b>
                    XL
                  </span>
                </div>
              </div>
              <div className="price-detail">
                <div className="product-amount-container">
                  <AddIcon />
                  <div className="product-amount">2</div>
                  <RemoveIcon />
                </div>
                <div className="product-price">RP.30.000</div>
              </div>
            </div>
            <div className="HR" />
            <div className="product">
              <div className="product-detail">
                <img
                  src="https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmVlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  className="image"
                  alt=""
                />
                <div className="details">
                  <span className="product-name">
                    <b>Product:</b>
                    Minuman
                  </span>
                  <span className="product-id">
                    <b>ID:</b>
                    89796875
                  </span>
                  <div
                    className="product-color"
                    style={{ backgroundColor: "orange" }}
                  />
                  <span className="product-size">
                    <b>Size:</b>
                    XL
                  </span>
                </div>
              </div>
              <div className="price-detail">
                <div className="product-amount-container">
                  <AddIcon />
                  <div className="product-amount">2</div>
                  <RemoveIcon />
                </div>
                <div className="product-price">RP.30.000</div>
              </div>
            </div>
          </div>
          <div className="summary">
            <h1 className="summary-title">ORDER SUMMARY</h1>
            <div className="summary-item">
              <span className="summary-item-text">Subtotal</span>
              <span className="summary-item-price">RP.60.000</span>
            </div>
            <div className="summary-item">
              <span className="summary-item-text">Estimated Shipping</span>
              <span className="summary-item-price">RP.10.000</span>
            </div>
            <div className="summary-item">
              <span className="summary-item-text">Discount</span>
              <span className="summary-item-price">RP.5.000</span>
            </div>
            <div
              className="summary-item"
              style={{ fontSize: "24px", fontWeight: "500" }}
            >
              <span className="summary-item-text">Total</span>
              <span className="summary-item-price">RP.90.000</span>
            </div>
            <button className="button">CHEKOUT NOW</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
