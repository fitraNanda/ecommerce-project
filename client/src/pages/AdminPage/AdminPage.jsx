import React, { useState } from "react";
import "./AdminPage.scss";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useNavigate } from "react-router-dom";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Axios from "axios";
import { API_URL } from "../../constant/API_URL";
import Swal from "sweetalert2";

const AdminPage = () => {
  const navigate = useNavigate();
  const options = ["Kue", "Sembako", "Minuman"];
  const [selected, setSelected] = useState(options[0]);

  const [fileInput, setFileInput] = useState({
    fileName: "",
    addFile: null,
  });

  const [preview, setPreview] = useState(null);

  const [state, setState] = useState({
    name: "",
    price: 0,
    description: "",
    CategoryId: 1,
  });

  function inputHandler(e) {
    let { name, value } = e.target;
    setState((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function selectHandler(e) {
    setSelected(e.target.value);
    if (e.target.value == "Kue") {
      setState((prev) => {
        return { ...prev, CategoryId: 1 };
      });
    } else if (e.target.value == "Sembako") {
      setState((prev) => {
        return { ...prev, CategoryId: 2 };
      });
    } else if (e.target.value == "Minuman") {
      setState((prev) => {
        return { ...prev, CategoryId: 3 };
      });
    }
  }

  function fileHandler(e) {
    let { name, files } = e.target;
    setFileInput((prev) => {
      return { ...prev, [name]: files[0] };
    });

    setFileInput((prev) => {
      return { ...prev, fileName: files[0].name };
    });

    setPreview(() => {
      return URL.createObjectURL(files[0]);
    });
  }

  function submit(e) {
    e.preventDefault();
    if (fileInput.addFile) {
      let formData = new FormData();
      let obj = {
        name: state.name,
        price: state.price,
        description: state.description,
        CategoryId: state.CategoryId,
      };
      formData.append("data", JSON.stringify(obj));
      formData.append("file", fileInput.addFile);
      Axios.post(`${API_URL}/products/upload`, formData)
        .then((res) => {
          Swal.fire("Good job!", "Berhasil menambahkan produk!", "success");

          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
            <div className="title-container">
              <h1 className="title" style={{ borderBottom: "1px solid black" }}>
                ADD PRODUCT
              </h1>
              <h1
                className="title"
                onClick={() => navigate("/admin/page/update")}
              >
                EDIT PRODUCT
              </h1>
              <h1 className="title" onClick={() => navigate("/admin/page/del")}>
                DELETE PRODUCT
              </h1>
            </div>
            <form className="form">
              <input
                type="text"
                className="input"
                placeholder="Name"
                name="name"
                onChange={inputHandler}
              />
              <input
                type="number"
                className="input"
                placeholder="Price"
                name="price"
                onChange={inputHandler}
              />
              <input
                type="text"
                className="input"
                placeholder="Description"
                name="description"
                onChange={inputHandler}
              />
              <div className="filter">
                <select
                  className="select"
                  value={selected}
                  onChange={selectHandler}
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
                    <input
                      id="inputTag"
                      type="file"
                      className="input"
                      name="addFile"
                      onChange={fileHandler}
                    />
                  </label>
                </div>
              </div>

              <button className="button" onClick={submit}>
                ADD
              </button>
              {preview ? (
                <img className="img-prev" src={preview} alt="" />
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
