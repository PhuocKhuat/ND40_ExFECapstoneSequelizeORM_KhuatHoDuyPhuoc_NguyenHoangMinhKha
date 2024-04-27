import { call, put, takeLatest } from "redux-saga/effects";
import { capstoneService } from "../../services/CapstoneService";
import {
  GET_COMMENT_INFO,
  GET_COMMENT_INFO_SAGA,
  GET_IMG_INFO,
  GET_IMG_INFO_SAGA,
  GET_IMG_LIST,
  GET_IMG_LIST_SAGA,
  POST_LOGIN,
  POST_LOGIN_SAGA,
  POST_SIGNUP_SAGA,
  SEARCH_IMAGE,
  SEARCH_IMAGE_SAGA,
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

      window.location.reload();
    }
  } catch (error) {
    console.log("🚀 ~ function*postLoginAction ~ error:", error);
  }
}

function* postSignupAction(action) {
  const { payload } = action;
  // console.log("🚀 ~ function*postSignupAction ~ payload:", payload);

  try {
    const { data } = yield call(capstoneService.postSignup, payload);

    if (data.status === 200) {
      message.success(data.message);

      yield put({
        type: "SWITCH_TAB",
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

    if(data.status === 200){
      yield put({
        type: GET_COMMENT_INFO,
        payload: data.data,
      })
    }
  } catch (error) {
    console.log("🚀 ~ function*getImgInfoAction ~ error:", error);
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