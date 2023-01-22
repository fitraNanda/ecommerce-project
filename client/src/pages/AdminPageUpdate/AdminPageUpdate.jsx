import React, { useState } from "react";
import "../AdminPage/AdminPage.scss";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useNavigate } from "react-router-dom";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import SearchIcon from "@mui/icons-material/Search";

const AdminPageUpdate = () => {
  const navigate = useNavigate();

  const options = ["Kue", "Sembako", "Minuman"];
  const [selected, setSelected] = useState(options[0]);
  const submit = (e) => {
    e.preventDefault();
    console.log(selected);
  };

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
          <div className="register-wrapper" style={{ marginTop: "50px" }}>
            <div className="title-container">
              <h1 className="title" onClick={() => navigate("/admin/page")}>
                ADD PRODUCT
              </h1>
              <h1 className="title" style={{ borderBottom: "1px solid black" }}>
                EDIT PRODUCT
              </h1>
              <h1 className="title" onClick={() => navigate("/admin/page/del")}>
                DELETE PRODUCT
              </h1>
            </div>
            <form
              className="form-search"
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                marginTop: "25px",
              }}
            >
              <input
                type="text"
                className="input"
                style={{ width: "50%", padding: "10px" }}
                placeholder="Search..."
              />
              <SearchIcon style={{ margin: "5px" }} />
            </form>
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
                <select
                  className="select"
                  value={selected}
                  onChange={(e) => {
                    setSelected(e.target.value);
                  }}
                >
                  {options.map((val) => {
                    return (
                      <option value={val} key={val}>
                        {val}
                      </option>
                    );
                  })}
                </select>

                <div>
                  <label htmlFor="inputTag" className="input-field">
                    <h6>Add image</h6>
                    <CameraAltIcon />
                    <input id="inputTag" type="file" className="input" />
                  </label>
                </div>
              </div>

              <button className="button" onClick={submit}>
                EDIT
              </button>
              <img
                className="img-prev"
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPageUpdate;
