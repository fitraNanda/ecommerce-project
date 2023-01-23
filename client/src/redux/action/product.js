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
