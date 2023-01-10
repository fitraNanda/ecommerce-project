import React from "react";
import { popularProduct } from "../../data";
import Product from "../Product/Product";
import "./Products.scss";

const Products = () => {
  return (
    <div className="products-container">
      {popularProduct.map((val) => {
        return <Product item={val} key={val.id} />;
      })}
    </div>
  );
};

export default Products;
