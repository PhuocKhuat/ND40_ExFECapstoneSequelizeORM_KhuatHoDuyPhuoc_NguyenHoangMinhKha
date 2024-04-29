import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_IMG_URL, GET_IMG_LIST_SAGA } from "../../../action/action";
import { NavLink } from "react-router-dom";

export default function ImageList() {
  const imgList = useSelector((state) => state.reducer.imgList);
  // console.log("🚀 ~ ImageList ~ imgList:", imgList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: GET_IMG_LIST_SAGA,
    });
  }, []);

  const imageList = () =>
    imgList !== "" ? (
      imgList.map((item) => (
        <NavLink to={`/img-info/${item.imgId}`} className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <img
              className="rounded w-full h-44 object-cover object-center mb-6"
              src={`${BASE_IMG_URL}/${item.imgUrl}`}
              alt="content"
            />
            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
              SUBTITLE
            </h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
              {item.imgName}
            </h2>
            <p className="leading-relaxed text-base truncate">{item.description}</p>
          </div>
        </NavLink>
      ))
    ) : (
      <div className="text-red-500 text-3xl">
        <span>No images found</span>
      </div>
    );

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 uppercase">
              Choose an image that matches your wishesF
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded" />
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Introducing "Short & Sweet: A Collection of Cat Images" Embark on a
            delightful journey into the world of feline charm with our curated
            collection, "Short & Sweet." Dive into a plethora of captivating
            snapshots capturing the essence of our beloved companions, cats.
            From playful antics to moments of serene repose, each image is a
            testament to the unique and endearing nature of these enigmatic
            creatures. Join us as we celebrate the beauty, humor, and sheer
            adorableness of cats in this charming collection. "Short & Sweet" —
            where every purr and meow tells a story.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">{imageList()}</div>
      </div>
    </section>
  );
}
