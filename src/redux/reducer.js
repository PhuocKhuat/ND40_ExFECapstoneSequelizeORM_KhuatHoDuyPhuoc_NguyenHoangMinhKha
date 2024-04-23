import { GET_IMG_LIST, POST_LOGIN } from "../action/action";

const initialState = {
  imgList: [],
  users: JSON.parse(localStorage.getItem("LOGIN_USER")),
};

export let reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_IMG_LIST:
      return { ...state, imgList: payload };

    case POST_LOGIN:
      return { ...state, users: payload };

    default:
      return state;
  }
};
