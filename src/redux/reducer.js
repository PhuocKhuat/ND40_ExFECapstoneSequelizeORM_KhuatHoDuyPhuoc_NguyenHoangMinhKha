import { GET_IMG_LIST, POST_LOGIN } from "../action/action";

const initialState = {
  imgList: [],
  users: null,
};

export let reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_IMG_LIST:
      return { ...state, imgList: payload };

    case POST_LOGIN:
      return { ...state, imgList: payload };

    default:
      return state;
  }
};
