import React from "react";
import "./Product.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { API_URL } from "../../constant/API_URL";
import { useNavigate } from "react-router-dom";
import { getProductId } from "../../redux/action/product";
import { connect } from "react-redux";

const Product = (props) => {
  const navigate = useNavigate();
  const clikHandler = (id) => {
    props.getProductId(id);
  };

  const formatRupiah = (money) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(money);
  };

  return (
    <div
      className="product-container"
      onClick={() => clikHandler(props.item.id)}
    >
      <div className="circle">
        <img src={`${API_URL}/${props.item.image}`} className="image" alt="" />
      </div>
      <div className="name">
        <h3 className="product-name">{props.item.name}</h3>
        <h4 className="product-name">{formatRupiah(props.item.price)}</h4>
      </div>
      <div className="info">
        <div className="icon">
          <ShoppingCartOutlinedIcon />
        </div>
        <div className="icon">
          <SearchOutlinedIcon />
        </div>
        <div className="icon">
          <FavoriteBorderOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productGlobal: state.product,
  };
};

const mapDispatchToProps = {
  getProductId,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
