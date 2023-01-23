import { combineReducers } from "redux";
import userReducer from "./user";
import productReducer from "./product";
import singleProductReducer from "./singleProduct";

export default combineReducers({
  user: userReducer,
  product: productReducer,
  singleProduct: singleProductReducer,
});
