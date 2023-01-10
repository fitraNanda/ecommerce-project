import React from "react";
import "./Login.scss";

const Login = () => {
  return (
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
  );
};

export default Login;
