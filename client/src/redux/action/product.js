import Axios from "axios";
import { API_URL } from "../../constant/API_URL";

export const getProduct = () => {
  return (dispatch) => {
    Axios.get(`${API_URL}/products/get`)
      .then((res) =>
        dispatch({
          type: "GET_PRODUCT",
          payload: res.data,
        })
      )
      .catch((err) => console.log(err));
  };
};

export const getProductId = (id) => {
  Axios.get(`${API_URL}/products/get/${id}`)
    .then((res) => {
      localStorage.setItem("product", JSON.stringify(res.data));

      window.location.href = `http://localhost:3000/product-page/${id}`;
    })
    .catch((err) => console.log(err));
};
