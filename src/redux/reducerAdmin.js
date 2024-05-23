import {
  ADD_USER,
  DELETE_USER,
  GET_USER_LIST,
  UPDATE_USER,
} from "../action/action";

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

    case UPDATE_USER:
      const cloneUpdateUserList = [...state.userList];
      const index = cloneUpdateUserList.findIndex((user) => {
        // console.log("🚀 ~ index ~ user.userId:", user.userId)
        return user.userId === payload.userId;
      });
      if (index !== -1) {
        cloneUpdateUserList[index] = {
          ...cloneUpdateUserList[index],
          ...payload,
        };
      }
      return { ...state, userList: cloneUpdateUserList };

    default:
      return state;
  }
};
