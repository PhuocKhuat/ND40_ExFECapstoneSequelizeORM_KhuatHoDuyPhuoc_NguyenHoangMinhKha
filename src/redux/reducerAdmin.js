import { ADD_USER, DELETE_USER, GET_USER_LIST } from "../action/action";

const initialState = {
  userList: [],
};

export let reducerAdmin = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_LIST:
      return { ...state, userList: payload };
    case DELETE_USER:
      const cloneUserList = [...state.userList];
      const removeUser = cloneUserList.filter(
        (user) => user.userId !== payload
      );
      return { ...state, userList: removeUser };

    case ADD_USER:
      const cloneAddUserList = [...state.userList, payload];
      return { ...state, userList: cloneAddUserList };
    default:
      return state;
  }
};
