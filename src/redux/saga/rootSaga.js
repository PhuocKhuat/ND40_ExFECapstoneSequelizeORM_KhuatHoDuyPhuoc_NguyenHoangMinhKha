import { all } from "redux-saga/effects";
import {
  previewActionImgList,
  previewAddCommentAction,
  previewAddImagesAction,
  previewCommentInfoAction,
  previewDeleteSavedImageAction,
  previewImgInfoAction,
  previewListOfCreatedImageAction,
  previewListOfSavedImageAction,
  previewLoginAction,
  previewSaveImageAction,
  previewSearchAction,
  previewSignupAction,
  previewUpdateUserInfoAction,
} from "./capstoneSaga";

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
    previewListOfSavedImageAction(),
    previewDeleteSavedImageAction(),
    previewListOfCreatedImageAction()
  ]);
}
