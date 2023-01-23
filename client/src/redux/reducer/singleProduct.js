const init_state = {
  id: "",
  name: "",
  price: "",
  image: "",
  description: "",
  stock: "",
  CategoryId: "",
};

const reducer = (state = init_state, action) => {
  switch (action.type) {
    case "GET_PRODUCT_BY_ID":
      return (state = action.payload);
    default:
      return state;
  }
};

export default reducer;
