import {
  ADD_USER,
  ADD_USER_SAGA,
  DATA_CHAT,
  GET_IMG_LIST,
  GET_IMG_LIST_SAGA,
  GET_USER_LIST,
  GET_USER_LIST_SAGA,
  RESET_DATA_CHAT,
  SEARCH_IMAGE_SAGA,
  UPDATE_AVATAR,
  UPDATE_AVATAR_SAGA,
  UPDATE_USER,
  UPDATE_USER_SAGA,
} from "./action";

const getImgListSaga = () => ({
  type: GET_IMG_LIST_SAGA,
});
const getImgList = (payload) => ({
  type: GET_IMG_LIST,
  payload,
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

const updateUserSaga = (payload) => ({
  type: UPDATE_USER_SAGA,
  payload,
});
const updateUser = (payload) => ({
  type: UPDATE_USER,
  payload,
});

const updateAvatarSaga = (payload) => ({
  type: UPDATE_AVATAR_SAGA,
  payload,
});
const updateAvatar = (payload) => ({
  type: UPDATE_AVATAR,
  payload,
});

const getUserListSaga = () => ({
  type: GET_USER_LIST_SAGA,
});
const getUserList = (payload) => ({
  type: GET_USER_LIST,
  payload,
});

const getDataChat = (payload) => ({
  type: DATA_CHAT,
  payload,
});

const resetDataChat = (payload) => ({
  type: RESET_DATA_CHAT,
  payload,
});

export {
  getImgListSaga,
  getImgList,
  searchImgByName,
  addUserSaga,
  addUser,
  updateUserSaga,
  updateUser,
  getUserListSaga,
  getUserList,
  getDataChat,
  resetDataChat,
  updateAvatarSaga,
  updateAvatar,
};
