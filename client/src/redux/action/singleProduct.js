import Axios from "axios";
import { API_URL } from "../../constant/API_URL";

export const getProductId = (id) => {
  return (dispatch) => {
    Axios.get(`${API_URL}/products/get`)
      .then((res) => {
        let myData = res.data.filter((val) => {
          return val.id == id;
        });
        dispatch({
          type: "GET_PRODUCT_BY_ID",
          payload: myData,
        });
      })
      .catch((err) => console.log(err));
  };
};
