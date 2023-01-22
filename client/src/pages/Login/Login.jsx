import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import Annoucements from "../../components/Annoucements/Annoucements";
import Axios from "axios";
import { API_URL } from "../../constant/API_URL";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import { loginUser } from "../../redux/action/user";

const Login = (props) => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleInput = (e) => {
    let { name, value } = e.target;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      let result = await Axios.post(`${API_URL}/users/login`, input, {
        withCredentials: true,
      });

      localStorage.setItem("user", JSON.stringify(result.data));
      props.loginUser(result.data);
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "<h4>Username atau Password tidak cocok</h4>",
      });
      console.log(error);
    }
  };

  if (props.userGlobal.id) {
    navigate("/");
  }

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
            <input
              onChange={handleInput}
              name="username"
              type="text"
              className="input"
              placeholder="username"
            />
            <input
              onChange={handleInput}
              name="password"
              type="password"
              className="input"
              placeholder="password"
            />
            <button className="button" onClick={submit}>
              LOGIN
            </button>
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

const mapStateToProps = (state) => {
  return {
    userGlobal: state.user,
    productGlobal: state.product,
  };
};

const mapDispatchToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
