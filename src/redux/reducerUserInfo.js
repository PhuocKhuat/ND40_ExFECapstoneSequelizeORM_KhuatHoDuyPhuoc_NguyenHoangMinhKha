import {
  DELETE_CREATED_IMAGE,
  DELETE_SAVED_IMAGE,
  GET_CREATED_IMAGE,
  GET_SAVED_IMAGE,
  IS_HOVERING_CREATED_IMAGE,
  IS_HOVERING_SAVED_IMAGE,
  UPDATE_USER_FORM,
  UPDATE_USER_FORM_INITIAL,
  UPDATE_USER_INFO,
} from "../action/action";
import { UserInfo } from "../objectClass/userInfo";

const initialState = {
  listOfSavedImage: [],
  isHovering: -1,
  listOfCreatedImage: [],
  updateUserInfo: new UserInfo(),
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

    case DELETE_CREATED_IMAGE:
      const cloneListOfCreatedImage = [...state.listOfCreatedImage];
      const deleteCreatedImage = cloneListOfCreatedImage.filter(
        (img) => img.imgId !== payload
      );
      return { ...state, listOfCreatedImage: deleteCreatedImage };

    case UPDATE_USER_FORM:
      return { ...state, updateUserInfo: payload };
      
    case UPDATE_USER_FORM_INITIAL:
      return { ...state, updateUserInfo: payload };

    case UPDATE_USER_INFO:
      return { ...state, updateUserInfo: payload };
      
    default:
      return state;
  }
};
