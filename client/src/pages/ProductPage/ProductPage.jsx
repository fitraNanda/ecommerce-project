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
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const Product = (props) => {
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);

  const addBtn = () => {
    setQty(qty + 1);
  };

  const minBtn = () => {
    if (qty > 1) {
      setQty(qty - 1);
    } else {
      return;
    }
  };

  const submit = () => {
    Axios.post(`${API_URL}/carts/add`, {
      UserId: 1,
      ProductId: 4,
      quantity: 9,
      isPay: false,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="productPage-container">
      <Annoucements />
      <Navbar />
      <div
        className="border"
        style={{ borderTop: "1px solid lightgray", width: "100%" }}
      ></div>
      <button
        className="top-button"
        style={{
          backgroundColor: "transparent",
          padding: "10px",
          fontWeight: "600",
          cursor: "pointer",
          margin: "10px",
        }}
        onClick={() => navigate("/product-list")}
      >
        Continue Shopping
      </button>
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
              <RemoveIcon onClick={minBtn} style={{ cursor: "pointer" }} />
              <span className="amount">{qty}</span>
              <AddIcon onClick={addBtn} style={{ cursor: "pointer" }} />
            </div>
            <button className="button" onClick={submit}>
              add to cart
            </button>
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
