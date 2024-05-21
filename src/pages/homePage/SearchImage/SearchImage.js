import { Field, Form, Formik, useFormik } from "formik";
import React from "react";
import "./styleImageList.scss";
import AddImage from "./AddImage/AddImage";
import { BellOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { SEARCH_IMAGE_SAGA } from "../../../action/action";
import { useNavigate } from "react-router-dom";

export default function SearchImage() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const initialValues = {
    searchImage: "",
  };
  const { values, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log("🚀 ~ SearchImage ~ values:", values.searchImage);
      resetForm();
      dispatch({ type: SEARCH_IMAGE_SAGA, payload: values.searchImage });
      navigate(`/search-image/${values.searchImage}`);
    },
  });

  return (
    <div className="homeBar">
      <div className="container flex">
        <AddImage />
        <Formik initialValues={initialValues}>
          <Form className="formHome ms-4" onSubmit={handleSubmit}>
            <Field
              type="text"
              name="searchImage"
              value={values.searchImage}
              onChange={handleChange}
              className="searchImage rounded-3xl outline-none"
              placeholder="Search image name ..."
            />
          </Form>
        </Formik>
        <BellOutlined className="mx-5 text-2xl" />
      </div>
    </div>
  );
}
