import React, { useEffect, useState } from "react";
import "./Admin.scss";
import Axios from "axios";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/action/user";
import SettingsIcon from "@mui/icons-material/Settings";

const Admin = (props) => {
  const navigate = useNavigate();

  const [fileInput, setFileInput] = useState({
    fileName: "",
    addFile: null,
  });

  function inputEditImage(e) {
    let { name, files } = e.target;
    setFileInput((prev) => {
      return { ...prev, [name]: files[0] };
    });

    setFileInput((prev) => {
      return { ...prev, fileName: files[0].name };
    });
  }

  function addFile() {
    if (fileInput.addFile) {
      let formData = new FormData();

      let obj = {
        title: "malam",
        description: "ok",
      };

      formData.append("data", JSON.stringify(obj));
      formData.append("file", fileInput.addFile);

      Axios.post("http://localhost:3300/products/upload", formData)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });

      console.log(formData);
    }
  }

  useEffect(() => {
    const userLocalStorage = localStorage.getItem("user");
    if (!userLocalStorage || JSON.parse(userLocalStorage).role !== "admin") {
      navigate("/");
    }
  });

  return (
    <div>
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
            <div className="menuItem" onClick={() => navigate("/admin/page")}>
              <SettingsIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="admin-container">
        <div className="container">
          <div className="inside">
            <table className="table-latitude">
              <caption>Product Data</caption>
              <thead>
                <th>No.</th>
                <th>Name</th>
                <th>Price</th>
                <th>Image</th>
                <th>Description</th>
                <th>Category</th>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Technical Writer</td>
                  <td>robyn@mail.com</td>
                  <td>1</td>
                  <td>Technical Writer</td>
                  <td>robyn@mail.com</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={6}>Contact details for the knowledge</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userGlobal: state.user,
  };
};

const mapDispatchToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
