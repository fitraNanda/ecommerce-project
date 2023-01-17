const init_state = {
  id: "",
  username: "",
  email: "",
  image: "",
  role: "",
  status: "",
};

const reducer = (state = init_state, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
