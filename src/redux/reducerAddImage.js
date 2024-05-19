import {
    ADD_IMAGES_SUCCESS,
    DELETE_IMAGE,
    IS_HOVERING,
    UPLOAD_IMAGES,
  } from "../action/action";
  
  const initialState = {
    imgList: [],
    isHovering: false,
  };
  
  export let reducerAddImage = (state = initialState, { type, payload }) => {
    switch (type) {
      case UPLOAD_IMAGES:
        const cloneImgList = [...state.imgList, payload];
        return { ...state, imgList: cloneImgList };
  
      case ADD_IMAGES_SUCCESS:
        return { ...state, imgList: payload };
  
      case IS_HOVERING:
        return { ...state, isHovering: payload };
  
      case DELETE_IMAGE:
        const cloneDeleteImg = [...state.imgList];
        const deleteImg = cloneDeleteImg.filter((img, index) => index !== payload);
        return { ...state, imgList: deleteImg };
  
      default:
        return state;
    }
  };
  