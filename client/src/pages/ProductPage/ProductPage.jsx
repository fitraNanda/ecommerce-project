import React, { useEffect, useState } from "react";
import Annoucements from "../../components/Annoucements/Annoucements";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import "./ProductPage.scss";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { connect } from "react-redux";
import { API_URL } from "../../constant/API_URL";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";
import { getProductId } from "../../redux/action/product";
import { getCart } from "../../redux/action/cart";
import Swal from "sweetalert2";

const Product = (props) => {
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const params = useParams();
  const [data, setData] = useState(JSON.parse(localStorage.getItem("product")));

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
    if (props.userGlobal.id) {
      Axios.post(`${API_URL}/carts/add`, {
        UserId: props.userGlobal.id,
        ProductId: parseInt(params.productId),
        quantity: qty,
        isPay: false,
      })
        .then((res) => {
          console.log(res);
          props.getCart(props.userGlobal.id);
          Swal.fire("Good job!", "Berhasil Menambahkan Produk!", "success");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    const productLocalStorage = localStorage.getItem("product");
    setData(JSON.parse(productLocalStorage));
  }, []);

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
          <img className="image" src={`${API_URL}/${data[0].image}`} alt="" />
        </div>
        <div className="info-container">
          <h1 className="title">{data[0].name}</h1>
          <p className="description">{data[0].description}</p>
          <span className="price">{data[0].price}</span>

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
    userGlobal: state.user,
  };
};

const mapDispatchToProps = {
  getProductId,
  getCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
