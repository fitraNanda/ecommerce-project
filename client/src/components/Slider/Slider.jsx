import React, { useState, useRef, useEffect } from "react";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import "./Slider.scss";
import { sliderItems } from "../../data";
import { useNavigate } from "react-router-dom";

const Slider = () => {
  const navigate = useNavigate();
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  const delay = 5000;

  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setSlideIndex((prevIndex) =>
          prevIndex === sliderItems.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [slideIndex]);

  return (
    <div className="slider-container">
      <div
        className="arrow"
        direction="left"
        style={{ left: "10px" }}
        onClick={() => handleClick("left")}
      >
        <ArrowLeftOutlinedIcon />
      </div>
      <div
        className="wrapper"
        style={{
          transform: `translateX(${slideIndex * -100}vw)`,
          transform: `translate3d(${-slideIndex * 100}vw, 0, 0)`,
        }}
      >
        {sliderItems.map((val) => (
          <div
            className="slide"
            style={{ backgroundColor: `#${val.bg}` }}
            key={val.id}
          >
            <div className="imgContainer">
              <img src={val.img} className="image" alt="" />
            </div>
            <div className="infoContainer">
              <h1 className="title">{val.title}</h1>
              <p className="description">{val.desc}</p>
              <button
                className="button"
                onClick={() => navigate("/product-list")}
              >
                SHOP NOW
              </button>
            </div>
          </div>
        ))}
      </div>
      <div
        className="arrow"
        direction="right"
        style={{ right: "10px" }}
        onClick={() => handleClick("right")}
      >
        <ArrowRightOutlinedIcon />
      </div>
    </div>
  );
};

export default Slider;
