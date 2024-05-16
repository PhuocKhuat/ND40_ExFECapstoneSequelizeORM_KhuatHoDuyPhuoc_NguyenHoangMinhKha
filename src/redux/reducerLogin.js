import {
  POST_LOGIN,
  SELECT_TAB,
  SWITCH_TAB,
} from "../action/action";

const initialState = {
  users: JSON.parse(localStorage.getItem("LOGIN_USER")),
  switchTab: "2",
};

export const reducerLogin = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_LOGIN:
      return { ...state, users: payload };

    case SWITCH_TAB:
      return { ...state, switchTab: "1" };

    case SELECT_TAB:
      return { ...state, switchTab: payload };

    default:
      return state;
  }
};
