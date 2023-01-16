import React from "react";
import "./Navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar-container">
      <div className="wrapper">
        <div className="left">
          <span className="language">EN</span>
          <div className="searchContainer">
            <input type="text" className="input" placeholder="Search" />
            <SearchIcon
              style={{ color: "gray", fontSize: "16px ", cursor: "pointer" }}
            />
          </div>
        </div>
        <div className="center">
          <h1 className="logo" onClick={() => navigate("/")}>
            LAPAU BARU
          </h1>
        </div>
        <div className="right">
          <div className="menuItem" onClick={() => navigate("/register")}>
            REGISTER
          </div>
          <div className="menuItem">SIGN IN</div>
          <div className="menuItem">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
