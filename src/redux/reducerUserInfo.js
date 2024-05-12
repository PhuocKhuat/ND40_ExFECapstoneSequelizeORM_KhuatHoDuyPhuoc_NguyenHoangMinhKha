import { GET_SAVED_IMAGE } from "../action/action";

const initialState = {
  listOfSavedImage: [],
};

export let reducerUserInfo = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SAVED_IMAGE:
      return { ...state, listOfSavedImage: payload };

    default:
      return state;
  }
};
