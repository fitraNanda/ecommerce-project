import React from "react";
import "./Cart.scss";
import Annoucements from "../../components/Annoucements/Annoucements";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { API_URL } from "../../constant/API_URL";
import DeleteIcon from "@mui/icons-material/Delete";
import { getCart } from "../../redux/action/cart";
import Axios from "axios";

const Cart = (props) => {
  const navigate = useNavigate();

  const submitRight = (val) => {
    if (props.userGlobal.id) {
      Axios.post(`${API_URL}/carts/add/cart`, {
        id: val.id,
        UserId: val.UserId,
        ProductId: val.ProductId,
        quantity: val.quantity + 1,
        isPay: val.isPay,
      })
        .then((res) => {
          console.log(res);
          props.getCart(props.userGlobal.id);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const submitLeft = (val) => {
    if (props.userGlobal.id && val.quantity > 1) {
      Axios.post(`${API_URL}/carts/add/cart`, {
        id: val.id,
        UserId: val.UserId,
        ProductId: val.ProductId,
        quantity: val.quantity - 1,
        isPay: val.isPay,
      })
        .then((res) => {
          console.log(res);
          props.getCart(props.userGlobal.id);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const formatRupiah = (money) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(money);
  };

  const deleteCart = (id) => {
    Axios.get(`${API_URL}/carts/delete/${id}`)
      .then((res) => {
        props.getCart(props.userGlobal.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const checkout = () => {};

  const subTotal = () => {
    let final = 0;
    for (let i = 0; i < props.cartGlobal.length; i++) {
      final += props.cartGlobal[i].Product.price * props.cartGlobal[i].quantity;
    }
    return final;
  };

  return (
    <div className="cart-container">
      <Annoucements />
      <Navbar />
      <div
        className="border"
        style={{ borderTop: "1px solid lightgray", width: "100%" }}
      ></div>
      <div className="cart-wrapper">
        <h1 className="title">Your Cart</h1>
        <div className="top">
          <button
            className="top-button"
            style={{ backgroundColor: "transparent" }}
            onClick={() => navigate("/product-list")}
          >
            Continue Shopping
          </button>
          <div className="top-texts">
            <span className="top-text">
              Shopping Cart({props.cartGlobal.length})
            </span>
            <span className="top-text">Your Whistlist(0)</span>
          </div>
          <button
            className="top-button"
            style={{ border: "none", backgroundColor: "black", color: "white" }}
            onClick={() => navigate("/")}
          >
            To Homepage
          </button>
        </div>
        <div className="bottom">
          <div className="info">
            {props.cartGlobal.map((val) => {
              return (
                <>
                  <div className="product">
                    <div className="product-detail">
                      <img
                        src={`${API_URL}/${val.Product.image}`}
                        className="image"
                        alt=""
                      />
                      <div className="details">
                        <span className="product-name">
                          <b>Product:</b>
                          {val.Product.name}
                        </span>
                        <span className="product-id">
                          <b>Desc:</b>
                          {val.Product.description}
                        </span>

                        <span className="product-size">
                          <b>Harga:</b>
                          {formatRupiah(val.Product.price)}
                        </span>
                        <div
                          className="product-color"
                          style={{
                            backgroundColor: "red",
                            textAlign: "center",
                            fontWeight: "bold",
                            cursor: "pointer",
                            color: "white",
                            height: "30px",
                            width: "30px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          onClick={() => {
                            deleteCart(val.id);
                          }}
                        >
                          <DeleteIcon style={{ fontSize: "20px" }} />
                        </div>
                      </div>
                    </div>
                    <div className="price-detail">
                      <div className="product-amount-container">
                        <RemoveIcon
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            submitLeft(val);
                          }}
                        />
                        <div className="product-amount"> {val.quantity}</div>
                        <AddIcon
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            submitRight(val);
                          }}
                        />
                      </div>
                      <div className="product-price">
                        {formatRupiah(val.Product.price * val.quantity)}
                      </div>
                    </div>
                  </div>
                  <div className="HR" />
                </>
              );
            })}
          </div>
          <div className="summary">
            <h1 className="summary-title">ORDER SUMMARY</h1>
            <div className="summary-item">
              <span className="summary-item-text">Subtotal</span>
              <span className="summary-item-price">
                {formatRupiah(subTotal())}
              </span>
            </div>
            <div className="summary-item">
              <span className="summary-item-text">Estimated Shipping</span>
              <span className="summary-item-price">{formatRupiah(10000)}</span>
            </div>
            <div className="summary-item">
              <span className="summary-item-text">Discount</span>
              <span className="summary-item-price">{formatRupiah(5000)}</span>
            </div>
            <div
              className="summary-item"
              style={{ fontSize: "24px", fontWeight: "500" }}
            >
              <span className="summary-item-text">Total</span>
              <span className="summary-item-price">
                {formatRupiah(subTotal() + 10000 + 5000)}
              </span>
            </div>
            <button className="button" onClick={checkout}>
              CHEKOUT NOW
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userGlobal: state.user,
    cartGlobal: state.cart,
  };
};

const mapDispatchToProps = {
  getCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
