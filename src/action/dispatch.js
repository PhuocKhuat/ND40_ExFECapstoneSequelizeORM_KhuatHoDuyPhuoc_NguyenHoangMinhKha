import {
  ADD_USER,
  ADD_USER_SAGA,
  GET_IMG_LIST_SAGA,
  SEARCH_IMAGE_SAGA,
} from "./action";

const getImgList = () => ({
  type: GET_IMG_LIST_SAGA,
});

const searchImgByName = (payload) => ({ type: SEARCH_IMAGE_SAGA, payload });

const addUserSaga = (payload) => ({
  type: ADD_USER_SAGA,
  payload,
});
const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});

export { getImgList, searchImgByName, addUserSaga, addUser };
