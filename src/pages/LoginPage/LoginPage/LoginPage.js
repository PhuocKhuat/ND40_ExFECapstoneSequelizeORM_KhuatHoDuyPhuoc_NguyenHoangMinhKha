import { Field, Form, Formik, useFormik } from "formik";
import React from "react";
import "../../../common/styleCommon.css";
import "./styleLogin.scss";
import { Button } from "antd";
import { loginValidation } from "../../../validation/validateLogin";

export default function LoginPage() {
  const initialValues = {
    email: "",
    password: "",
  };
  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: loginValidation,
    onSubmit: (values) => {
      console.log("🚀 ~ LoginPage ~ values:", values);
    },
  });
  return (
    <div className="loginPage">
      <div className="container">
        <div>
          <h1 className="text-2xl uppercase mb-5 text-center font-bold">
            Welcome to my picture
          </h1>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={loginValidation}
        >
          <Form onSubmit={handleSubmit}>
            <div className="mb-3">
              <p>Email:</p>
              <Field
                type="text"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                className="fieldLogin px-3"
                value={values.email}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div>
              <p>Password:</p>
              <Field
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                className="fieldLogin px-3"
                value={values.password}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
            </div>
            <div>
              {errors.email || errors.password ? (
                <Button className="bg-blue-500 mt-5 w-full" disabled>
                  Login
                </Button>
              ) : (
                <Button className="bg-blue-500 mt-5 w-full">Login</Button>
              )}
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
