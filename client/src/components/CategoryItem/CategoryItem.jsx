import React from "react";
import "./CategoryItem.scss";

const CategoryItem = ({ item }) => {
  return (
    <div className="categoryItem-container">
      <img className="image" src={item.img} alt="" />
      <div className="info">
        <h1 className="title">{item.title}</h1>
        <button className="button">SHOP NOW</button>
      </div>
    </div>
  );
};

export default CategoryItem;
