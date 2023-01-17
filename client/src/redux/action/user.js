export const loginUser = (dataUser) => {
  return (dispatch) => {
    dispatch({
      type: "USER_LOGIN",
      payload: dataUser,
    });
  };
};
