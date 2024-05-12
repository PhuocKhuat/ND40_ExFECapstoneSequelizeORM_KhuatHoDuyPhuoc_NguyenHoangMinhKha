import React, { useEffect } from "react";
import "../../common/styleCommon.css";
import { Field, Form, Formik, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { USER_INFO_SAGA } from "../../../action/action";

export default function UserInfo() {
  const { users } = useSelector((state) => state.reducerLogin);
  // console.log("🚀 ~ UserInfo ~ users:", users)

  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    fullName: "",
    password: "",
    age: "",
  };

  const {
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    resetForm,
    setValues,
  } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log("🚀 ~ UserInfo ~ values:", values);
    },
  });

  useEffect(() => {
    setValues({
      email: users.data.email,
      fullName: users.data.fullName,
      password: users.data.password,
      age: users.data.age,
    });
  }, [users]);

  const handleReset = () => {
    // Xử lý reset các giá trị trường input
    resetForm({
      values: {
        ...initialValues,
        email: values.email,
      },
    });
  };

  return (
    <div className="userInfo mt-14 mb-10">
      <div className="container">
        <Formik initialValues={initialValues} onReset={handleReset}>
          <Form className="max-w-md mx-auto" onSubmit={handleSubmit}>
            <div>
              <h2 className="uppercase text-2xl font-bold">
                Individual profile
              </h2>
            </div>
            <div className="mt-10">
              <div className="relative z-0 w-full mb-5 group">
                <Field
                  type="email"
                  name="email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer cursor-not-allowed"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-sm bottom-10 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6
                "
                >
                  Email
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <Field
                  type="text"
                  name="fullName"
                  id="floating_fullname"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  value={values.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                <label
                  htmlFor="floating_fullname"
                  className="peer-focus:font-medium absolute text-sm bottom-10 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Fullname
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="password"
                  name="password"
                  id="floating_password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                <label
                  htmlFor="floating_password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <Field
                  type="text"
                  name="age"
                  id="floating_age"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  value={values.age}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                <label
                  htmlFor="floating_age"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Age
                </label>
              </div>
              <div className="flex space-x-3 mt-6">
                <div>
                  <button
                    type="reset"
                    className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                  >
                    Reset
                  </button>
                </div>
                <div>
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => {
                      dispatch({
                        type: USER_INFO_SAGA,
                        payload: values,
                      });
                    }}
                  >
                    Update information
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
