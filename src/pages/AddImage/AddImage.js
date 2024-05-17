import { Field, Form, Formik, useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_IMAGES_SAGA,
  DELETE_IMAGE,
  IS_HOVERING,
  UPLOAD_IMAGES,
} from "../../action/action";
import { DeleteOutlined } from "@ant-design/icons";
import "../../common/styleCommon.css";
import "./styleAddImage.scss";

export default function AddImage() {
  const { imgList, isHovering } = useSelector((state) => state.reducerAdmin);
  // console.log("🚀 ~ AddImage ~ isHovering:", isHovering);
  console.log("🚀 ~ AddImage ~ imgList:", imgList);
  const dispatch = useDispatch();

  const initialValues = {
    image: [],
  };

  const { values, handleBlur, handleSubmit } = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log("🚀 ~ AddImage ~ values:", values.image);
    },
  });

  const renderImageList = () =>
    imgList.map((item, index) => (
      <div
        className="mx-2 relative truncate"
        key={index}
        onMouseEnter={() => {
          dispatch({
            type: IS_HOVERING,
            payload: true,
          });
        }}
        onMouseLeave={() => {
          dispatch({
            type: IS_HOVERING,
            payload: false,
          });
        }}
      >
        <img className="w-32" src={item.url} alt="no data" />
        <div className={`absolute top-0 left-0 ${isHovering ? "" : "hidden"}`}>
          <p className="text-sm text-gray-500 ms-3">{item.file.name}</p>
          <p className="text-sm text-gray-500 ms-3">{item.file.size}</p>
          <button
            className="text-red-500 ms-24 text-lg"
            onClick={() => {
              dispatch({
                type: DELETE_IMAGE,
                payload: index,
              });
            }}
          >
            <DeleteOutlined />
          </button>
        </div>
      </div>
    ));

  const handleChangeImage = (e) => {
    const files = e.target.files;
    console.log("🚀 ~ handleChangeImage ~ files:", files);

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      const file = files[i];

      reader.readAsDataURL(file);
      reader.onload = (e) => {
        dispatch({
          type: UPLOAD_IMAGES,
          payload: { file, url: e.target.result },
        });
        values.image.push(file);
        // console.log("🚀 ~ handleChangeImage ~ array:", array);
      };
    }
  };

  const handleAddImages = () => {
    let files = values.image;
    // console.log("🚀 ~ AddImage ~ files:", files);

    files.forEach((item) => {
      let formData = new FormData();
      formData.append("image", item);

      dispatch({
        type: ADD_IMAGES_SAGA,
        payload: formData,
      });
    });
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden addImage">
      <div className="container px-5 py-20 mx-auto">
        <div>
          <h1 className="font-bold text-black text-2xl mb-3">Add your image</h1>
        </div>
        <div className="lg:w-full mx-auto flex flex-wrap">
          <Formik>
            <Form onSubmit={handleSubmit}>
              <div className="lg:flex block items-center justify-center w-full space-x-5">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 labelImage"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <Field
                    id="dropzone-file"
                    name="image"
                    type="file"
                    accept="image/jpg,image/png,image/jpeg"
                    className="hidden"
                    multiple
                    onChange={handleChangeImage}
                    onBlur={handleBlur}
                  />
                </label>
                <div className="space-y-5">
                  <div className="flex flex-col">
                    <label className="text-sm mb-2">Image name</label>
                    <Field
                      className="field"
                      placeholder="Add your image name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm mb-2">Description</label>
                    <Field
                      className="field field2"
                      placeholder="Add your image description"
                      as="textarea"
                      rows="20"
                      cols="50"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-start mt-5">{renderImageList()}</div>
              <div className="flex justify-end mt-5 gap-3">
                <button
                  className="bg-blue-500 rounded-lg p-3 text-white"
                  onClick={handleAddImages}
                >
                  Add image now
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  );
}
