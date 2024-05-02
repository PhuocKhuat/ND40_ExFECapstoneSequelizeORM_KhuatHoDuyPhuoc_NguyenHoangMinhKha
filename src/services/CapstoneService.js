import { http } from "./api";

export class CapstoneService {
  getImgList = () => http.get("/image/get-image-list");

  postLogin = (payload) => http.post("/user/login", payload);

  postSignup = (payload) => http.post("/user/signup", payload);

  getSearchImage = (payload) =>
    http.get(`/image/search-img-list-by-name?imgName=${payload}`);

  getImgInfo = (payload) =>
    http.get(`/image/get-img-info-and-creator/${payload}`);

  getCommentInfo = (payload) => http.get(`/user/get-comment-info/${payload}`);

  postAddComment = (payload) => http.post("/user/save-comment-info", payload);

  getSaveImage = (payload) => http.get(`/image/get-save-image/${payload}`);

  postAddImages = (payload) => http.post("/image/add-image", payload);

  putUpdateUserInfo = (payload) => http.put("/user/update-user-info", payload);
}

export const capstoneService = new CapstoneService();
