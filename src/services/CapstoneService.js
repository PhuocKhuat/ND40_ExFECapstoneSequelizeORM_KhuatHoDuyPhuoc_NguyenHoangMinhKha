import { http } from "./api";

export class CapstoneService {
  getImgList = () => {
    return http.get("/image/get-image-list");
  };

  postLogin = (data) => {
    return http.post("/user/login", data);
  };

  postSignup = (data)=>{
    return http.post("/user/signup", data);
  }

  getSearchImage = (data)=>{
    return http.get(`/image/search-img-list-by-name?imgName=${data}`);
  }
}

export const capstoneService = new CapstoneService();
