import Axios from "axios";
import { API_URL } from "../../constant/API_URL";

export const getCart = (id) => {
  return (dispatch) => {
    Axios.get(`${API_URL}/carts/get/${id}`)
      .then((res) => {
        localStorage.setItem("cart", JSON.stringify(res.data));
        dispatch({
          type: "GET_CART",
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const getCartKeep = (dataCart) => {
  return (dispatch) => {
    dispatch({
      type: "KEEP_CART",
      payload: dataCart,
    });
  };
};
