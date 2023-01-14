import React from "react";
import "./Register.scss";
import Axios from "axios";
import { API_URL } from "../../constant/API_URL";
import { useState } from "react";
import Swal from "sweetalert2";

const Register = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    image:
      "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=",
    role: "user",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleInput = (e) => {
    let { name, value } = e.target;

    if (name == "confirmPassword") {
      setConfirmPassword(value);
    }

    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    if (input.password == confirmPassword) {
      try {
        let result = await Axios.post(`${API_URL}/users/register`, input);
        console.log(result);

        Swal.fire("Berhasil Register!", "Silahkan cek Email anda!", "success");

        setInput({
          username: "",
          email: "",
          password: "",
        });
        setConfirmPassword("");
      } catch (error) {
        console.log(error);
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "<h4>Password tidak cocok</h4>",
      });
    }
  };

  return (
    <div className="register-container">
      <div className="register-wrapper">
        <h1 className="title">CREATE AN ACCOUNT</h1>
        <form className="form">
          <input
            onChange={handleInput}
            type="text"
            className="input"
            placeholder="username"
            name="username"
            value={input.username}
          />
          <input
            onChange={handleInput}
            type="email"
            className="input"
            placeholder="email"
            name="email"
            value={input.email}
          />
          <input
            onChange={handleInput}
            type="password"
            className="input"
            placeholder="password"
            name="password"
            value={input.password}
          />
          <input
            onChange={handleInput}
            type="password"
            className="input"
            placeholder="confrim password"
            name="confirmPassword"
            value={confirmPassword}
          />
          <span className="agreement">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate alias porro voluptatum
            </p>
            <b>PRIVACY POLICY</b>
          </span>
          <button onClick={submit} className="button">
            CREATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
