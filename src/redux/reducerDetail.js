import { ADD_COMMENT, GET_COMMENT_INFO, GET_IMG_INFO } from "../action/action";
import { ImgInfo } from "../objectClass/imgInfo";

const initialState = {
    imgInfo: new ImgInfo(),
    commentInfo: [],
};

export let reducerDetail =  (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_IMG_INFO:
      return { ...state, imgInfo: payload };

    case GET_COMMENT_INFO:
      return { ...state, commentInfo: payload };

    case ADD_COMMENT:
      let cloneCommentInfo = [...state.commentInfo, payload];
      return { ...state, commentInfo: cloneCommentInfo };
    default:
      return state;
  }
};
