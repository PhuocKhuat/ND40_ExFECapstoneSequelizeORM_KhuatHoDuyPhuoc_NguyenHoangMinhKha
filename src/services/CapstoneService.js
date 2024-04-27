import { http } from "./api";

export class CapstoneService {
  getImgList = () => {
    return http.get("/image/get-image-list");
  };

  postLogin = (payload) => {
    return http.post("/user/login", payload);
  };

  postSignup = (payload) => {
    return http.post("/user/signup", payload);
  };

  getSearchImage = (payload) => {
    return http.get(`/image/search-img-list-by-name?imgName=${payload}`);
  };

  getImgInfo = (payload) => {
    return http
      .get(`/image/get-img-info-and-creator/${payload}`);
  };

  getCommentInfo = (payload)=>{
    return http.get(`/user/get-comment-info/${payload}`)
  }
}

export const capstoneService = new CapstoneService();
