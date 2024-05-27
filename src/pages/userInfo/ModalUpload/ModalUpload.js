import { Field, Form, Formik, useFormik } from "formik";
import React, { useState } from "react";

export default function ModalUpload({ handleUploadCancel }) {
  const initialValues = {
    avatar: "",
  };
  const { values, handleBlur, handleSubmit, setFieldValue } = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log("🚀 ~ ModalUpload ~ values:", values);
    },
  });

  const [thumb, setThumb] = useState({
    avatar: "/imgs/icon-user.jpg",
  });

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setThumb({avatar: e.target.result});
      setFieldValue("avatar", file);
    };
  };

  return (
    <div>
      <Formik>
        <Form onSubmit={handleSubmit}>
          <div>
            <h1 className="font-medium text-xl">Change your avatar</h1>
          </div>
          <div className="flex justify-center mt-8">
            <div>
              <img alt="user" src={thumb.avatar} />
              <Field
                type="file"
                name="avatar"
                className="mt-2"
                accept="image/jpg,image/png,image/jpeg"
                onChange={handleChangeImage}
                onBlur={handleBlur}
              />
            </div>
          </div>
          <div className="mt-8 space-x-3 flex justify-center">
            <button
              className="bg-red-600 px-6 py-2 rounded-lg text-white hover:bg-red-900"
              onClick={handleUploadCancel}
            >
              Cancel
            </button>
            <button className="bg-blue-600 px-6 py-2 rounded-lg text-white hover:bg-blue-900">
              Upload
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
