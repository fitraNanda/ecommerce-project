import React, { useState } from "react";
import "./AdminPageUpdate.scss";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useNavigate } from "react-router-dom";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";
import { connect } from "react-redux";
import { API_URL } from "../../constant/API_URL";
import Axios from "axios";
import Swal from "sweetalert2";

const AdminPageUpdate = (props) => {
  const navigate = useNavigate();
  const [gotData, setGotData] = useState(null);
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState([]);
  const options = ["Kue", "Sembako", "Minuman"];
  const [selected, setSelected] = useState(options[0]);

  const [fileInput, setFileInput] = useState({
    fileName: "",
    addFile: null,
  });

  const [preview, setPreview] = useState(null);

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

  const submit = (e) => {
    e.preventDefault();
    if (fileInput.addFile) {
      let formData = new FormData();
      let obj = {
        name: gotData.name,
        price: gotData.price,
        description: gotData.description,
        CategoryId: gotData.categoryId,
        image: gotData.image,
      };
      formData.append("data", JSON.stringify(obj));
      formData.append("file", fileInput.addFile);
      Axios.post(`${API_URL}/products/update/${gotData.id}`, formData)
        .then((res) => {
          Swal.fire("Good job!", "Berhasil edit produk!", "success");

          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
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
              <h1 className="title" style={{ borderBottom: "1px solid black" }}>
                EDIT PRODUCT
              </h1>
              <h1 className="title" onClick={() => navigate("/admin/page/del")}>
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
                  value={gotData.name}
                />
                <input
                  type="number"
                  className="input"
                  placeholder="Price"
                  name="price"
                  value={gotData.price}
                />
                <input
                  type="text"
                  className="input"
                  placeholder="Description"
                  name="description"
                  value={gotData.description}
                />
                <div className="filter">
                  <select
                    className="select"
                    value={selected}
                    onChange={(e) => {
                      setSelected(e.target.value);
                      setGotData((prev) => {
                        if (e.target.value == "Kue") {
                          return { ...prev, CategoryId: 1 };
                        } else if (e.target.value == "Sembako") {
                          return { ...prev, CategoryId: 2 };
                        } else if (e.target.value == "Minuman") {
                          return { ...prev, CategoryId: 3 };
                        }
                      });
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
                  EDIT
                </button>
                {preview ? (
                  <img className="img-prev" src={preview} alt="" />
                ) : (
                  <img
                    className="img-prev"
                    src={`${API_URL}/${gotData.image}`}
                    alt=""
                  />
                )}
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

export default connect(mapStateToProps)(AdminPageUpdate);
