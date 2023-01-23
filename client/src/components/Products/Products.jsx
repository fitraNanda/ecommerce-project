import React from "react";
import Product from "../Product/Product";
import "./Products.scss";
import { connect } from "react-redux";

const Products = (props) => {
  return (
    <div className="products-container">
      {props.productGlobal.map((val) => {
        return <Product item={val} key={val.id} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productGlobal: state.product,
  };
};

export default connect(mapStateToProps)(Products);
