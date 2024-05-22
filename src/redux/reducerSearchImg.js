import { SEARCH_IMAGE } from "../action/action";

const initialState = {
  imgList: [],
};

export const reducerSearchImg = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_IMAGE:
      return { ...state, imgList: payload };

    default:
      return state;
  }
};
