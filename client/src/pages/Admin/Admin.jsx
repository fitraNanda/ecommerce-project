import React, { useEffect, useState } from "react";
import "./Admin.scss";
import Axios from "axios";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/action/user";
import SettingsIcon from "@mui/icons-material/Settings";
import { getProduct } from "../../redux/action/product";
import { API_URL } from "../../constant/API_URL";

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
    props.getProduct();
  }, []);

  if (props.userGlobal.role == "user") {
    navigate("/");
  }
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
                <th>Stock</th>
                <th>Category</th>
              </thead>
              <tbody>
                {props.productGlobal.map((val, i) => {
                  return (
                    <tr>
                      <th>{i + 1}</th>
                      <td>{val.name}</td>
                      <td>{val.price}</td>
                      <td>
                        <img
                          style={{ width: "50px", height: "50px" }}
                          src={`${API_URL}/${val.image}`}
                          alt=""
                        />
                      </td>
                      <td>{val.description}</td>
                      <td>{val.stock}</td>
                      <td>{val.Category.name}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productGlobal: state.product,
    userGlobal: state.user,
  };
};

const mapDispatchToProps = {
  getProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
