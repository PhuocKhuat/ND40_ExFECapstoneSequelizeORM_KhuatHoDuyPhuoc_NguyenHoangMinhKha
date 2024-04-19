import { Field, Form, Formik, useFormik } from "formik";
import React from "react";
import "./styleSignup.scss";
import { Button } from "antd";
import { loginValidation } from "../../../validation/validateLogin";

export default function SignupPage() {
  const initialValues = {
    email: "",
    password: "",
    fullName: "",
    age: "",
  };
  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: loginValidation,
    onSubmit: (values) => {
      console.log("🚀 ~ SignupPage ~ values:", values);
    },
  });
  return (
    <div className="signupPage">
      <div className="container">
        <div>
          <h1 className="text-2xl uppercase mb-5 text-center font-bold">
            Welcome to my picture
          </h1>
        </div>
        <Formik>
          <Form onSubmit={handleSubmit}>
            <div>
              <p>Email:</p>
              <Field
                type="text"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                className="fieldSignup px-3"
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
                className="fieldSignup px-3"
                value={values.password}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
            </div>
            <div>
              <p>Full Name:</p>
              <Field
                type="text"
                name="fullName"
                onChange={handleChange}
                onBlur={handleBlur}
                className="fieldSignup px-3"
                value={values.fullName}
              />
              {errors.fullName && (
                <p className="text-red-500">{errors.fullName}</p>
              )}
            </div>
            <div>
              <p>Age:</p>
              <Field
                type="text"
                name="age"
                onChange={handleChange}
                onBlur={handleBlur}
                className="fieldSignup px-3"
                value={values.age}
              />
              {errors.age && <p className="text-red-500">{errors.age}</p>}
            </div>
            <div>
              {errors.email || errors.password ? (
                <Button className="bg-blue-500 mt-5 w-full" disabled>
                  Signup
                </Button>
              ) : (
                <Button className="bg-blue-500 mt-5 w-full">Signup</Button>
              )}
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
