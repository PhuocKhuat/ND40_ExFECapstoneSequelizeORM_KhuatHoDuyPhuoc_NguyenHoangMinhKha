import { call, put, takeLatest } from "redux-saga/effects";
import { capstoneService } from "../../services/CapstoneService";
import {
  ADD_COMMENT,
  ADD_COMMENT_SAGA,
  ADD_IMAGES,
  ADD_IMAGES_SAGA,
  ADD_IMAGES_SUCCESS,
  ADD_USER_SAGA,
  DELETE_CREATED_IMAGE,
  DELETE_CREATED_IMAGE_SAGA,
  DELETE_SAVED_IMAGE,
  DELETE_SAVED_IMAGE_SAGA,
  DELETE_USER,
  DELETE_USER_SAGA,
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
  GET_USER_LIST,
  GET_USER_LIST_SAGA,
  POST_LOGIN,
  POST_LOGIN_SAGA,
  POST_SIGNUP_SAGA,
  SAVE_IMAGE_SAGA,
  SEARCH_IMAGE,
  SEARCH_IMAGE_SAGA,
  SWITCH_TAB,
  UPDATE_USER_INFO,
  USER_INFO_SAGA,
} from "../../action/action";
import { message } from "antd";
import Swal from "sweetalert2";
import { addUser, getImgList } from "../../action/dispatch";

function* getImgListAction() {
  try {
    const { data } = yield call(capstoneService.getImgList);

    if (data.status === 200) {
      yield put(getImgList(data.data));
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

      Swal.fire({
        title: "Information!",
        text: data.message,
        icon: "success",
      });

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
      Swal.fire({
        title: "Information!",
        text: data.message,
        icon: "success",
      });

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
      Swal.fire({
        title: "Information!",
        text: data.message,
        icon: "success",
      });
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
      Swal.fire({
        title: "Information!",
        text: data.message,
        icon: "success",
      });
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

      Swal.fire({
        title: "Information!",
        text: data.message,
        icon: "success",
      });
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

      Swal.fire({
        title: "Information!",
        text: "You've successfully deleted the image",
        icon: "success",
      });
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

      Swal.fire({
        title: "Information!",
        text: "You've successfully deleted the image",
        icon: "success",
      });
    }
  } catch (error) {
    console.log("🚀 ~ function*deleteCreatedImageAction ~ error:", error);
  }
}

// function* refreshTokenAction() {
//   try {
//     const { data } = yield call(capstoneService.refreshToken);
//     console.log("🚀 ~ function*refreshTokenAction ~ data:", data);

//     if (data.status === 200) {
//       localStorage.setItem("LOGIN_USER", JSON.stringify(data));
//       // window.location.reload();
//       return;
//     }
//     localStorage.removeItem("LOGIN_USER");
//   } catch (error) {
//     localStorage.removeItem("LOGIN_USER");
//     console.log("🚀 ~ function*refreshTokenAction ~ error:", error);
//   }
// }

function* getUserListAction() {
  try {
    const { data } = yield call(capstoneService.getUserList);

    if (data.status === 200) {
      yield put({
        type: GET_USER_LIST,
        payload: data.data,
      });
    }
  } catch (error) {
    console.log("🚀 ~ function*getUserListAction ~ error:", error);
  }
}

function* deleteUserAction(action) {
  const { payload } = action;
  try {
    const { data } = yield call(capstoneService.deleteUser, payload);
    console.log("🚀 ~ function*deleteUserAction ~ data:", data);

    if (data.status === 200) {
      yield put({
        type: DELETE_USER,
        payload: payload,
      });

      Swal.fire({
        title: "Information!",
        text: data.message,
        icon: "success",
      });
    }
  } catch (error) {
    console.log("🚀 ~ function*deleteUserAction ~ error:", error);
  }
}

function* addUserAction(action) {
  const { payload } = action;
  try {
    const { data } = yield call(capstoneService.addUser, payload);

    if (data.status === 200) {
      yield put(addUser(data.data));

      Swal.fire({
        title: "Information!",
        text: data.message,
        icon: "success",
      });
    }
  } catch (error) {
    Swal.fire({
      title: "Information!",
      text: "Add user failed",
      icon: "error",
    });
    console.log("🚀 ~ function*addUserAction ~ error:", error);
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

// export function* previewRefreshTokenAction() {
//   yield takeLatest(REFRESH_TOKEN, refreshTokenAction);
// }

export function* previewGetUserListAction() {
  yield takeLatest(GET_USER_LIST_SAGA, getUserListAction);
}

export function* previewDeleteUserAction() {
  yield takeLatest(DELETE_USER_SAGA, deleteUserAction);
}

export function* previewAddUserAction() {
  yield takeLatest(ADD_USER_SAGA, addUserAction);
}
