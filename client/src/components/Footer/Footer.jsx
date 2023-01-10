import React from "react";
import "./Footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useEffect } from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left">
        <h1 className="logo">Lapau Baru</h1>
        <p className="desc">
          There are many variations of passages of Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quaerat laborum nam, nostrum
          beatae,consectetur adipisicing elit. Quaerat laborum nam, nostrum
          beataeconsectetur adipisicing elit. Quaerat laborum nam, nostrum
          beataeconsectetur adipisicing elit. Quaerat laborum nam, nostrum
          beataeconsectetur adipisicing elit. Quaerat laborum nam, nostrum
          beatae
        </p>
        <div className="social-container">
          <div className="social-icon" style={{ backgroundColor: "#3b5999" }}>
            <FacebookIcon />
          </div>
          <div className="social-icon" style={{ backgroundColor: "#e4405f" }}>
            <InstagramIcon />
          </div>
          <div className="social-icon" style={{ backgroundColor: "#55acee" }}>
            <TwitterIcon />
          </div>
          <div className="social-icon" style={{ backgroundColor: "#e60023" }}>
            <PinterestIcon />
          </div>
        </div>
      </div>
      <div className="center">
        <h3 className="title">Useful Links</h3>
        <ul className="list">
          <li className="list-item">Home</li>
          <li className="list-item">Cart</li>
          <li className="list-item">Category</li>
          <li className="list-item">Kue</li>
          <li className="list-item">Sembako</li>
          <li className="list-item">Minuman</li>
          <li className="list-item">Whistlist</li>
        </ul>
      </div>
      <div className="right">
        <h3 className="title">Contact</h3>
        <div className="contact-item">
          <RoomIcon style={{ marginRight: "10px" }} />
          Padang, Sumatera barat
        </div>
        <div className="contact-item">
          <PhoneIcon style={{ marginRight: "10px" }} />
          +62 853 2289 3289
        </div>
        <div className="contact-item">
          <EmailOutlinedIcon style={{ marginRight: "10px" }} />
          lapaubaru@gmail.com
        </div>
        <img
          className="payment"
          src="https://go.rapyd.net/hubfs/Indonesia-Logos-2.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Footer;
