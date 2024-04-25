import { GET_IMG_LIST, SEARCH_IMAGE } from "../action/action";

const initialState = {
  imgList: [],
};

export let reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_IMG_LIST:
      return { ...state, imgList: payload };

    case SEARCH_IMAGE:
      return { ...state, imgList: payload };

    default:
      return state;
  }
};
