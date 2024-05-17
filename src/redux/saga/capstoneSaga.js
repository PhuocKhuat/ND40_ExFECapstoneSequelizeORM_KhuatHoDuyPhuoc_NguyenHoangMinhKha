import { call, put, takeLatest } from "redux-saga/effects";
import { capstoneService } from "../../services/CapstoneService";
import {
  ADD_COMMENT,
  ADD_COMMENT_SAGA,
  ADD_IMAGES,
  ADD_IMAGES_SAGA,
  ADD_IMAGES_SUCCESS,
  DELETE_CREATED_IMAGE,
  DELETE_CREATED_IMAGE_SAGA,
  DELETE_SAVED_IMAGE,
  DELETE_SAVED_IMAGE_SAGA,
  GET_COMMENT_INFO,
  GET_COMMENT_INFO_SAGA,
  GET_CREATED_IMAGE,
  GET_CREATED_IMAGE_SAGA,
  GET_IMG_INFO,
  GET_IMG_INFO_SAGA,
  GET_IMG_LIST,
  GET_IMG_LIST_SAGA,
  GET_SAVED_IMAGE,
  GET_SAVED_IMAGE_SAGA,
  POST_LOGIN,
  POST_LOGIN_SAGA,
  POST_SIGNUP_SAGA,
  REFRESH_TOKEN,
  SAVE_IMAGE_SAGA,
  SEARCH_IMAGE,
  SEARCH_IMAGE_SAGA,
  SWITCH_TAB,
  UPDATE_USER_INFO,
  USER_INFO_SAGA,
} from "../../action/action";
import { message } from "antd";

function* getImgListAction() {
  try {
    const { data } = yield call(capstoneService.getImgList);

    if (data.status === 200) {
      yield put({
        type: GET_IMG_LIST,
        payload: data.data,
      });
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log("🚀 ~ function*getImgListAction ~ error:", error);
  }
}

function* postLoginAction(action) {
  const { payload } = action;
  // console.log("🚀 ~ function*postLoginAction ~ payload:", payload)

  try {
    const { data } = yield call(capstoneService.postLogin, payload);

    if (data.status === 200) {
      yield put({
        type: POST_LOGIN,
        payload: data,
      });
      message.success(data.message);

      localStorage.setItem("LOGIN_USER", JSON.stringify(data));

      window.location.href = "/";
    }
  } catch (error) {
    console.log("🚀 ~ function*postLoginAction ~ error:", error);

    message.error(error.response.data.message);
  }
}

function* postSignupAction(action) {
  const { payload } = action;
  // console.log("🚀 ~ function*postSignupAction ~ payload:", payload);

  try {
    const { data } = yield call(capstoneService.postSignup, payload);
    console.log("🚀 ~ function*postSignupAction ~ data:", data);

    if (data.status === 200) {
      message.success(data.message);

      yield put({
        type: SWITCH_TAB,
      });
    }
  } catch (error) {
    console.log("🚀 ~ function*postSignupAction ~ error:", error);

    message.error("Email already exists");
  }
}

function* getSearchAction(action) {
  const { payload } = action;
  // console.log("🚀 ~ function*getSearchAction ~ payload:", typeof(payload))

  try {
    const { data } = yield call(capstoneService.getSearchImage, payload);
    if (data.status === 200) {
      yield put({
        type: SEARCH_IMAGE,
        payload: data.data,
      });
      return;
    }
  } catch (error) {
    console.log("🚀 ~ function*getSearchAction ~ error:", error);

    yield put({
      type: SEARCH_IMAGE,
      payload: "",
    });
    return;
  }
}

function* getImgInfoAction(action) {
  const { payload } = action;

  try {
    const { data } = yield call(capstoneService.getImgInfo, payload);

    if (data.status === 200) {
      yield put({
        type: GET_IMG_INFO,
        payload: data.data,
      });
    }
  } catch (error) {
    console.log("🚀 ~ function*getImgInfoAction ~ error:", error);
  }
}

function* getCommentInfoAction(action) {
  const { payload } = action;
  // console.log("🚀 ~ function*getCommentInfoAction ~ payload:", payload)

  try {
    const { data } = yield call(capstoneService.getCommentInfo, payload);

    if (data.status === 200) {
      yield put({
        type: GET_COMMENT_INFO,
        payload: data.data,
      });
    }
  } catch (error) {
    console.log("🚀 ~ function*getImgInfoAction ~ error:", error);
  }
}

function* getAddCommentAction(action) {
  const { payload } = action;

  try {
    const { data } = yield call(capstoneService.postAddComment, payload);

    if (data.status === 200) {
      yield put({
        type: ADD_COMMENT,
        payload: data.data,
      });
    }
  } catch (error) {
    console.log("🚀 ~ function*getAddCommentAction ~ error:", error);
  }
}

function* getSaveImageAction(action) {
  const { payload } = action;

  try {
    const { data } = yield call(capstoneService.getSaveImage, payload);

    if (data.status === 200) {
      message.success(data.message);
    }
  } catch (error) {
    console.log("🚀 ~ function*getSaveImageAction ~ error:", error);
  }
}

function* postAddImagesAction(action) {
  const { payload } = action;

  try {
    const { data } = yield call(capstoneService.postAddImages, payload);

    if (data.status === 200) {
      yield put({
        type: ADD_IMAGES,
        payload: data.data,
      });
      yield put({
        type: ADD_IMAGES_SUCCESS,
        payload: [],
      });
      message.success(data.message);
    }
  } catch (error) {
    console.log("🚀 ~ function*postAddImagesAction ~ error:", error);
    message.error("Add image failed");
  }
}

function* putUpdateUserInfoAction(action) {
  const { payload } = action;

  try {
    const { data } = yield call(capstoneService.putUpdateUserInfo, payload);

    if (data.status === 200) {
      yield put({
        type: UPDATE_USER_INFO,
        payload: data.data,
      });

      message.success(data.message);
    }
  } catch (error) {
    console.log("🚀 ~ function*putUpdateUserInfoAction ~ error:", error);

    message.error(error.response.data.message);
  }
}

function* getSavedImageAction() {
  try {
    const { data } = yield call(capstoneService.getListOfSavedImage);

    if (data.status === 200) {
      yield put({
        type: GET_SAVED_IMAGE,
        payload: data.data,
      });
    }
  } catch (error) {
    console.log("🚀 ~ function*getSavedImageAction ~ error:", error);
  }
}

function* deleteSavedImageAction(action) {
  const { payload } = action;

  try {
    const { data } = yield call(capstoneService.deleteSavedImage, payload);

    if (data.status === 200) {
      yield put({
        type: DELETE_SAVED_IMAGE,
        payload,
      });

      message.success(data.message);
    }
  } catch (error) {
    console.log("🚀 ~ function*deleteSavedImageAction ~ error:", error);
  }
}

function* getCreatedImageAction() {
  try {
    const { data } = yield call(capstoneService.getListOfCreatedImage);

    if (data.status === 200) {
      yield put({
        type: GET_CREATED_IMAGE,
        payload: data.data,
      });
    }
  } catch (error) {
    console.log("🚀 ~ function*getCreatedImageAction ~ error:", error);
  }
}

function* deleteCreatedImageAction(action) {
  const { payload } = action;
  try {
    const { data } = yield call(capstoneService.deleteCreatedImage, payload);

    if (data.status === 200) {
      yield put({
        type: DELETE_CREATED_IMAGE,
        payload,
      });
    }
  } catch (error) {
    console.log("🚀 ~ function*deleteCreatedImageAction ~ error:", error);
  }
}

function* refreshTokenAction() {
  try {
    const { data } = yield call(capstoneService.refreshToken);
    console.log("🚀 ~ function*refreshTokenAction ~ data:", data);

    if (data.status === 200) {
      localStorage.setItem("LOGIN_USER", JSON.stringify(data));
      window.location.reload();
    }
  } catch (error) {
    localStorage.removeItem("LOGIN_USER");
    console.log("🚀 ~ function*refreshTokenAction ~ error:", error);
  }
}

export function* previewActionImgList() {
  yield takeLatest(GET_IMG_LIST_SAGA, getImgListAction);
}

export function* previewLoginAction() {
  yield takeLatest(POST_LOGIN_SAGA, postLoginAction);
}

export function* previewSignupAction() {
  yield takeLatest(POST_SIGNUP_SAGA, postSignupAction);
}

export function* previewSearchAction() {
  yield takeLatest(SEARCH_IMAGE_SAGA, getSearchAction);
}

export function* previewImgInfoAction() {
  yield takeLatest(GET_IMG_INFO_SAGA, getImgInfoAction);
}

export function* previewCommentInfoAction() {
  yield takeLatest(GET_COMMENT_INFO_SAGA, getCommentInfoAction);
}

export function* previewAddCommentAction() {
  yield takeLatest(ADD_COMMENT_SAGA, getAddCommentAction);
}

export function* previewSaveImageAction() {
  yield takeLatest(SAVE_IMAGE_SAGA, getSaveImageAction);
}

export function* previewAddImagesAction() {
  yield takeLatest(ADD_IMAGES_SAGA, postAddImagesAction);
}

export function* previewUpdateUserInfoAction() {
  yield takeLatest(USER_INFO_SAGA, putUpdateUserInfoAction);
}

export function* previewListOfSavedImageAction() {
  yield takeLatest(GET_SAVED_IMAGE_SAGA, getSavedImageAction);
}

export function* previewDeleteSavedImageAction() {
  yield takeLatest(DELETE_SAVED_IMAGE_SAGA, deleteSavedImageAction);
}

export function* previewListOfCreatedImageAction() {
  yield takeLatest(GET_CREATED_IMAGE_SAGA, getCreatedImageAction);
}

export function* previewDeleteCreatedImageAction() {
  yield takeLatest(DELETE_CREATED_IMAGE_SAGA, deleteCreatedImageAction);
}

export function* previewRefreshTokenAction() {
  yield takeLatest(REFRESH_TOKEN, refreshTokenAction);
}
