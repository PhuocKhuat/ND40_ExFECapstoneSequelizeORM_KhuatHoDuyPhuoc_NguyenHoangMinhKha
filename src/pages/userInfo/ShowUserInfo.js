import React from "react";
import ImageManagement from "./ImageManagement/ImageManagement";
import Information from "./Infomation/Information";
import "../../common/styleCommon.css";

export default function ShowUserInfo() {
  return (
    <div>
      <div className="container">
        <Information />
        <ImageManagement />
      </div>
    </div>
  );
}
