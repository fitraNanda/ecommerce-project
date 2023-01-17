import React from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import Annoucements from "../../components/Annoucements/Annoucements";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login">
      <Annoucements />
      <div className="navbar-container">
        <div className="wrapper">
          <div className="left">
            <span style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
              HOMEPAGE
            </span>
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
          </div>
        </div>
      </div>
      <div className="login-container">
        <div className="login-wrapper">
          <h1 className="title">SIGN IN</h1>
          <form className="form">
            <input type="text" className="input" placeholder="username" />
            <input type="text" className="input" placeholder="password" />
            <button className="button">LOGIN</button>
            <a className="link" href="">
              Forget Password
            </a>
            <a className="link" href="">
              Create new Accout
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
