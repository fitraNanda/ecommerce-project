import React from "react";
import "./Register.scss";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-wrapper">
        <h1 className="title">CREATE AN ACCOUNT</h1>
        <form className="form">
          <input type="text" className="input" placeholder="first name" />
          <input type="text" className="input" placeholder="last name" />
          <input type="text" className="input" placeholder="username" />
          <input type="text" className="input" placeholder="email" />
          <input type="text" className="input" placeholder="password" />
          <input type="text" className="input" placeholder="confrim password" />
          <span className="agreement">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            alias porro voluptatum
            <b>PRIVACY POLICY</b>
          </span>
          <button className="button">CREATE</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
