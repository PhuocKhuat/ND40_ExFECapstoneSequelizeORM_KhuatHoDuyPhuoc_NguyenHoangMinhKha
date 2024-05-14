import {
  DELETE_SAVED_IMAGE,
  GET_CREATED_IMAGE,
  GET_CREATED_IMAGE_SAGA,
  GET_SAVED_IMAGE,
  IS_HOVERING_CREATED_IMAGE,
  IS_HOVERING_SAVED_IMAGE,
} from "../action/action";

const initialState = {
  listOfSavedImage: [],
  isHovering: -1,
  listOfCreatedImage: [],
};

export let reducerUserInfo = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SAVED_IMAGE:
      return { ...state, listOfSavedImage: payload };

    case IS_HOVERING_SAVED_IMAGE:
      return { ...state, isHovering: payload };

    case DELETE_SAVED_IMAGE:
      const cloneListOfSavedImage = [...state.listOfSavedImage];
      const deleteSavedImage = cloneListOfSavedImage.filter(
        (img) => img.img.imgId !== payload
      );
      return { ...state, listOfSavedImage: deleteSavedImage };

    case GET_CREATED_IMAGE:
      return { ...state, listOfCreatedImage: payload };

    case IS_HOVERING_CREATED_IMAGE:
      return { ...state, isHovering: payload };

    default:
      return state;
  }
};
