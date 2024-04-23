import { Field, Form, Formik, useFormik } from "formik";
import React from "react";
import "./styleImageList.scss";
import AddImage from "./AddImage/AddImage";
import { BellOutlined } from "@ant-design/icons";

export default function SearchImage() {
  const initialValues = {
    searchImage: "",
  };
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log("🚀 ~ SearchImage ~ values:", values)      
    }
  });
  return (
    <div className="homeBar flex">
      <AddImage />
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="formHome ms-4">
          <Field
            type="text"
            name="searchImage"
            value= {values.searchImage}
            onChange = {handleChange}
            className="searchImage rounded-3xl outline-none"
            placeholder= "Search Image"
          />
        </Form>
      </Formik>
      <BellOutlined className="mx-5 text-2xl" />
    </div>
  );
}
