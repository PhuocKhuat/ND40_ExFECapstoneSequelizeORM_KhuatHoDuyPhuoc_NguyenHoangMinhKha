import { GET_SAVED_IMAGE, IS_HOVERING_SAVED_IMAGE } from "../action/action";

const initialState = {
  listOfSavedImage: [],
  isHovering: -1,
};

export let reducerUserInfo = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SAVED_IMAGE:
      return { ...state, listOfSavedImage: payload };

    case IS_HOVERING_SAVED_IMAGE:
      return { ...state, isHovering: payload };
    default:
      return state;
  }
};
