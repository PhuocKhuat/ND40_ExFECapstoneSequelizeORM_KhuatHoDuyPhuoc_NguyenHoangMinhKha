import { all } from "redux-saga/effects";
import { previewActionImgList, previewAddCommentAction, previewCommentInfoAction, previewImgInfoAction, previewLoginAction, previewSearchAction, previewSignupAction } from "./capstoneSaga";

export default function* rootSaga() {
  yield all([
    previewActionImgList(),
    previewLoginAction(),
    previewSignupAction(),
    previewSearchAction(),
    previewImgInfoAction(),
    previewCommentInfoAction(),
    previewAddCommentAction()
  ]);
}
