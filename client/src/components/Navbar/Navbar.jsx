import React, { useEffect } from "react";
import "./Navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { API_URL } from "../../constant/API_URL";
import { connect } from "react-redux";

const Navbar = (props) => {
  const navigate = useNavigate();

  const logout = async () => {
    localStorage.removeItem("user");
    try {
      let result = await Axios.post(
        `${API_URL}/users/logout`,
        {},
        {
          withCredentials: true,
        }
      );
      navigate("/login");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="navbar-container">
      <div className="wrapper">
        <div className="left">
          <span className="language">ID</span>
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
        {props.userGlobal.id ? (
          <div className="right">
            <div className="menuItem">Hello {props.userGlobal.username}</div>
            <button onClick={logout}>LOGOUT</button>
            <div className="menuItem">
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlinedIcon color="action" />
              </Badge>
            </div>
          </div>
        ) : (
          <div className="right">
            <div className="menuItem" onClick={() => navigate("/register")}>
              REGISTER
            </div>
            <div className="menuItem" onClick={() => navigate("/login")}>
              SIGN IN
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userGlobal: state.user,
  };
};

export default connect(mapStateToProps)(Navbar);
