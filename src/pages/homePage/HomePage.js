import React from "react";
import SearchImage from "./SearchImage/SearchImage";
import ImageList from "./ImageList/ImageList";
import Introduction from "./Introduction/Introduction";
import "../../common/styleCommon.css";
import PetService from "./PetService/PetService";
import Feedback from "./Feedback/Feedback";

export default function HomePage() {
  return (
    <div className="homePage mt-10">
      <SearchImage />
      <Introduction />
      <ImageList />
      <PetService />
      <Feedback />
    </div>
  );
}
