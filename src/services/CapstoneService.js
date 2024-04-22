import { http } from "./api";

export class CapstoneService {
  getImgList = () => {
    return http.get("/image/get-image-list");
  };

  postLogin = (data)=>{
    return http.post("/user/login", data);
  }
}

export const capstoneService = new CapstoneService();
