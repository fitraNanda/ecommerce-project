const init_state = [];
const reducer = (state = init_state, action) => {
  switch (action.type) {
    case "GET_CART":
      return (state = action.payload);
    case "KEEP_CART":
      return (state = action.payload);
    default:
      return state;
  }
};

export default reducer;
