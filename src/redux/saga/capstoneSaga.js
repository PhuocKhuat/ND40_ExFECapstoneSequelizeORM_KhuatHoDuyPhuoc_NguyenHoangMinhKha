import { call, put, takeLatest } from "redux-saga/effects";
import { capstoneService } from "../../services/CapstoneService";
import { GET_IMG_LIST, GET_IMG_LIST_SAGA, POST_LOGIN, POST_LOGIN_SAGA } from "../../action/action";

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

  try {
    const { data } = yield call(capstoneService.postLogin(payload));

    if (data.status === 200) {
      yield put({
        type: POST_LOGIN,
        payload: data.data,
      })
    }

  } catch (error) {
  console.log("🚀 ~ function*postLoginAction ~ error:", error)
  }
}

export function* previewActionImgList() {
  yield takeLatest(GET_IMG_LIST_SAGA, getImgListAction);
}

export function* previewLoginAction() {
  yield takeLatest(POST_LOGIN_SAGA, postLoginAction);
}
