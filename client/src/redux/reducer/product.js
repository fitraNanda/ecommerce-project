const init_state = [];
const reducer = (state = init_state, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return (state = action.payload);
    default:
      return state;
  }
};

export default reducer;
