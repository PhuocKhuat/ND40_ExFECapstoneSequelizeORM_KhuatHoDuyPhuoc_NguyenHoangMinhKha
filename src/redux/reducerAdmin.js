import { GET_USER_LIST } from "../action/action";

const initialState = {
  userList: [],
};

export let reducerAdmin = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_LIST:
      return { ...state, userList: payload };

    default:
      return state;
  }
};
