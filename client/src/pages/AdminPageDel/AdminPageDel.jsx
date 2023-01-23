import React, { useState } from "react";
import "../AdminPageUpdate/AdminPageUpdate.scss";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";
import { connect } from "react-redux";
import { API_URL } from "../../constant/API_URL";
import Axios from "axios";
import Swal from "sweetalert2";
import { getProduct } from "../../redux/action/product";

const AdminPageDel = (props) => {
  const navigate = useNavigate();
  const [gotData, setGotData] = useState(false);
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState([]);

  const submit = async (e) => {
    e.preventDefault();

    try {
      let result = await Axios.post(
        `${API_URL}/products/delete/${gotData.id}`,
        { image: gotData.image }
      );
      console.log(result.data);
      Swal.fire("Good job!", "Berhasil hapus produk!", "success");
      props.getProduct();
      setGotData(null);
    } catch (error) {
      console.log(error);
    }
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
                  value={search}
                />
                <SearchIcon style={{ margin: "5px" }} />
              </form>

              {filterData.map((val) => {
                if (!search) {
                  return;
                }
                return (
                  <div
                    onClick={() => {
                      setGotData(val);
                      setSearch("");
                    }}
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
                  disabled
                  value={`${gotData.name} / ${gotData.stock}`}
                />
                <input
                  type="number"
                  className="input"
                  placeholder="Price"
                  name="price"
                  disabled
                  value={gotData.price}
                />
                <input
                  type="text"
                  className="input"
                  placeholder="Description"
                  name="description"
                  value={gotData.description}
                  disabled
                />

                <div className="filter">
                  <img
                    className="img"
                    src={`${API_URL}/${gotData.image}`}
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

const mapDispatchToProps = {
  getProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPageDel);
