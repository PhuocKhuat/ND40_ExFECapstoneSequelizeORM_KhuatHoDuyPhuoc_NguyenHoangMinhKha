import { all } from "redux-saga/effects";
import { previewActionImgList, previewLoginAction } from "./capstoneSaga";

export default function* rootSaga() {
  yield all([
    previewActionImgList(),
    previewLoginAction()
  ]);
}
