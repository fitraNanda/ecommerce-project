export const getProduct = (dataProduct) => {
  return (dispatch) => {
    dispatch({
      type: "GET_PRODUCT",
      payload: dataProduct,
    });
  };
};
