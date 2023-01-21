import React from "react";
import "./AdminPage.scss";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useNavigate } from "react-router-dom";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const AdminPage = () => {
  const navigate = useNavigate();

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
            <h1
              className="logo"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              LAPAU BARU
            </h1>
          </div>
          <div className="right">
            <div
              className="menuItem"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/admin")}
            >
              <AdminPanelSettingsIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="admin-container">
        <div className="register-container">
          <div className="register-wrapper">
            <h1 className="title">ADD PRODUCT</h1>
            <form className="form">
              <input
                type="text"
                className="input"
                placeholder="Name"
                name="name"
              />
              <input
                type="number"
                className="input"
                placeholder="Price"
                name="price"
              />
              <input
                type="text"
                className="input"
                placeholder="Description"
                name="description"
              />
              <div className="filter">
                <select className="select">
                  <option className="option" disabled selected>
                    Category
                  </option>
                  <option className="option">Kue</option>
                  <option className="option">Sembako</option>
                  <option className="option">Minuman</option>
                </select>

                <div>
                  <label htmlFor="inputTag" className="input-field">
                    <h6>Add image</h6>
                    <CameraAltIcon />
                    <input id="inputTag" type="file" className="input" />
                  </label>
                </div>
              </div>

              <button className="button">CREATE</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
