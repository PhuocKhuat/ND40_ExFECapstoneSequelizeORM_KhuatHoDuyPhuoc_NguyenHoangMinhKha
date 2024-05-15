import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BASE_IMG_URL,
  DELETE_SAVED_IMAGE_SAGA,
  GET_SAVED_IMAGE_SAGA,
  IS_HOVERING_SAVED_IMAGE,
} from "../../../action/action";
import "./styleSavedImage.scss";
import "../../../common/styleCommon.css";
import { DeleteOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

export default function SavedImage() {
  const { listOfSavedImage, isHovering } = useSelector(
    (state) => state.reducerUserInfo
  );
  // console.log("🚀 ~ SavedImage ~ isHovering:", isHovering);
  // console.log("🚀 ~ SavedImage ~ listOfSavedImage:", listOfSavedImage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: GET_SAVED_IMAGE_SAGA,
    });
  }, []);

  const renderListOfSavedImage = () =>
    listOfSavedImage.map((item, index) => (
      <div className="p-4 lg:w-1/5 md:w-1/2 relative" key={index}>
        <NavLink
          className="h-full flex flex-col items-center text-center relative"
          onMouseEnter={() => {
            dispatch({ type: IS_HOVERING_SAVED_IMAGE, payload: index });
          }}
          onMouseLeave={() => {
            dispatch({ type: IS_HOVERING_SAVED_IMAGE, payload: -1 });
          }}
          to={`/img-info/${item.img.imgId}`}
        >
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-full h-64 object-cover object-center mb-4"
            src={`${BASE_IMG_URL}/${item.img.imgUrl}`}
          />
          <div
            className={`w-full absolute left-0 bottom-4 ${
              isHovering === index ? "" : "hidden"
            }`}
          >
            <button className="absolute right-2 bottom-56 text-red-600" onClick={()=>{
               dispatch({
                type: DELETE_SAVED_IMAGE_SAGA,
                payload: item.img.imgId,
               })
            }}>
              <DeleteOutlined />
            </button>
            <h2 className="title-font font-medium text-lg text-gray-900">
              {item.img.imgName}
            </h2>
            <h3 className=" mb-3">{item.user.fullName}</h3>
            <p className="mb-4 truncate w-3/4 ms-10 text-black">
              {item.img.description}
            </p>
          </div>
        </NavLink>
      </div>
    ));

  return (
    <section className="text-gray-200 body-font savedImage">
      <div className="px-5 pt-10 pb-20 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-3xl font-medium title-font mb-4 text-white">
            SAVED IMAGE
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Where to keep your saved photos.Let's explore them together and
            enjoy the awesome experiences.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 overflow-y-scroll" style={{height: "300px"}}>{renderListOfSavedImage()}</div>
      </div>
    </section>
  );
}
