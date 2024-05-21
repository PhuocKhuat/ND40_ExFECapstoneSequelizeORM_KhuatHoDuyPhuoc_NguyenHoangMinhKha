import { ADD_USER, ADD_USER_SAGA } from "./action";

const addUserSaga = (payload) => ({
  type: ADD_USER_SAGA,
  payload,
});

const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});

export { addUserSaga, addUser };
