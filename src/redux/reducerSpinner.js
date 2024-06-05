import { IS_LOADING_OFF, IS_LOADING_ON } from "../action/action";

const initialState = {
  isLoading: false,
};

export const reducerSpinner = (state = initialState, { type, payload }) => {
  switch (type) {
    case IS_LOADING_ON:
      return { ...state, isLoading: true };
    case IS_LOADING_OFF:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};
