import { all } from "redux-saga/effects";
import { previewActionImgList, previewAddCommentAction, previewAddImagesAction, previewCommentInfoAction, previewImgInfoAction, previewLoginAction, previewSaveImageAction, previewSearchAction, previewSignupAction, previewUpdateUserInfoAction } from "./capstoneSaga";

export default function* rootSaga() {
  yield all([
    previewActionImgList(),
    previewLoginAction(),
    previewSignupAction(),
    previewSearchAction(),
    previewImgInfoAction(),
    previewCommentInfoAction(),
    previewAddCommentAction(),
    previewSaveImageAction(),
    previewAddImagesAction(),
    previewUpdateUserInfoAction(),
  ]);
}
