import { ADD_IMAGES, GET_IMG_LIST } from "../action/action";

const initialState = {
  imgList: [],
};

export let reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_IMG_LIST:
      return { ...state, imgList: payload };

    case ADD_IMAGES:
      let cloneImgList = [...state.imgList, payload];
      return { ...state, imgList: cloneImgList };

    default:
      return state;
  }
};
