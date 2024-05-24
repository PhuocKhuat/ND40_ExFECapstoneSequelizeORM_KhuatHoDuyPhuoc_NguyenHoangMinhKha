import { ADD_IMAGES, DATA_CHAT, GET_IMG_LIST } from "../action/action";

const initialState = {
  imgList: [],
  dataChat: [],
};

export let reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_IMG_LIST:
      return { ...state, imgList: payload };

    case ADD_IMAGES:
      let cloneImgList = [...state.imgList, payload];
      return { ...state, imgList: cloneImgList };

    case DATA_CHAT:
      let cloneDataChat = [...state.dataChat, payload];
      return { ...state, dataChat: cloneDataChat };

    default:
      return state;
  }
};
