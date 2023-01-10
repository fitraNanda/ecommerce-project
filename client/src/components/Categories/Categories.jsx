import React from "react";
import "./Categories.scss";
import CategoryItem from "../CategoryItem/CategoryItem";
import { categories } from "../../data";

const Categories = () => {
  return (
    <div className="categories-container">
      {categories.map((val) => {
        return <CategoryItem key={val.id} item={val} />;
      })}
    </div>
  );
};

export default Categories;
