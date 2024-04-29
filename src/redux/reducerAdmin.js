import { UPLOAD_IMAGES } from "../action/action";

const initialState = {
  imgList: [],
};

export let reducerAdmin = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPLOAD_IMAGES:
      const cloneImgList = [...state.imgList, payload];
      return { ...state, imgList: cloneImgList };

    default:
      return state;
  }
};
