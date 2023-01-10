import React from "react";
import Annoucements from "../components/Annoucements/Annoucements";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Newsletter from "../components/Newsletter/Newsletter";
import Products from "../components/Products/Products";
import Slider from "../components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Annoucements />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
