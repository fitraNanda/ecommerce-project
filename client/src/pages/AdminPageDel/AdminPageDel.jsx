import React, { useState } from "react";
import "../AdminPageUpdate/AdminPageUpdate.scss";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";
import { connect } from "react-redux";

const AdminPageDel = (props) => {
  const navigate = useNavigate();
  const [gotData, setGotData] = useState(false);
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState([]);

  const submit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    let res = props.productGlobal.filter((val) => {
      return val.name.toLowerCase().includes(search);
    });
    setFilterData(res);
  }, [search]);

  return (
    <div className="update-container">
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
      <div className="adminUpdate-container">
        <div className="register-container">
          <div className="register-wrapper" style={{ marginTop: "50px" }}>
            <div className="title-container">
              <h1 className="title" onClick={() => navigate("/admin/page")}>
                ADD PRODUCT
              </h1>
              <h1
                className="title"
                onClick={() => navigate("/admin/page/update")}
              >
                EDIT PRODUCT
              </h1>
              <h1 className="title" style={{ borderBottom: "1px solid black" }}>
                DELETE PRODUCT
              </h1>
            </div>
            <div className="input-container">
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
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  className="input"
                  style={{ width: "50%", padding: "10px" }}
                  placeholder="Search..."
                />
                <SearchIcon style={{ margin: "5px" }} />
              </form>

              {filterData.map((val) => {
                if (!search) {
                  return;
                }
                return (
                  <div
                    type="text"
                    className="inputSearch"
                    style={{
                      width: "50%",
                      padding: "10px",
                      cursor: "pointer",

                      border: "1px solid black",
                    }}
                  >
                    {val.name}
                  </div>
                );
              })}
            </div>
            {gotData ? (
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
                  <img
                    className="img"
                    src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    style={{ height: "200px", width: "200px" }}
                  />
                </div>

                <button className="button" onClick={submit}>
                  DELETE
                </button>
              </form>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productGlobal: state.product,
  };
};

export default connect(mapStateToProps)(AdminPageDel);
