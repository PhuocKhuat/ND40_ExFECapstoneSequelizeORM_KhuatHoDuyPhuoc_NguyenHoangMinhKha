import React, { useEffect, useState } from "react";
import { EditOutlined, RedoOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Drawer, Space } from "antd";
import { Field, Form, Formik, useFormik } from "formik";
import { useDispatch } from "react-redux";
import { updateUserSaga } from "../../action/dispatch";
import { updateUser } from "../../validation/updateUser";

const DrawerUpdateUser = ({ user }) => {
  // console.log("🚀 ~ DrawerUpdateUser ~ user:", user);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const initialValues = {
    email: "",
    fullName: "",
    age: "",
    role: "",
  };

  const { values, handleSubmit, handleChange, handleBlur, setValues, errors } =
    useFormik({
      initialValues,
      validationSchema: updateUser,
      onSubmit: (values) => {
        console.log("🚀 ~ DrawerUpdateUser ~ values:", values);
      },
    });

  const dispatch = useDispatch();

  const [getUserInfo, setGetUserInfo] = useState({});
  useEffect(() => {
    setValues({
      email: getUserInfo.email,
      fullName: getUserInfo.fullName,
      age: getUserInfo.age,
      role: getUserInfo.role,
    });
  }, [getUserInfo]);

  return (
    <>
      <Button
        onClick={() => {
          showDrawer();
          user && setGetUserInfo(user);
        }}
        icon={<EditOutlined />}
        className="text-yellow-500"
      />
      <Drawer
        title="Update user information"
        width={420}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        footer={
          <Space className="my-5">
            <Button icon={<RedoOutlined />}>Reset</Button>
            {errors.fullName || errors.age || errors.role ? (
              <Button
                type="primary"
                icon={<UploadOutlined />}
                disabled
                className="cursor-not-allowed"
              >
                Update User
              </Button>
            ) : (
              <Button
                onClick={() => {
                  dispatch(updateUserSaga(values));
                  onClose();
                }}
                type="primary"
                icon={<UploadOutlined />}
              >
                Update User
              </Button>
            )}
          </Space>
        }
      >
        <Formik>
          <Form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="font-medium mb-2">Email</label>
              <Field
                className="formInput cursor-not-allowed"
                value={values.email}
                disabled
              />
            </div>
            <div className="flex flex-col mt-6">
              <label className="font-medium mb-2">Full name</label>
              <Field
                className="formInput"
                placeholder="Please input your full name"
                type="text"
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.fullName && (
                <p className="text-red-500 mt-2">{errors.fullName}</p>
              )}
            </div>
            <div className="flex flex-col mt-6">
              <label className="font-medium mb-2">Age</label>
              <Field
                className="formInput"
                placeholder="Please input your age"
                type="text"
                name="age"
                value={values.age}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.age && <p className="text-red-500 mt-2">{errors.age}</p>}
            </div>
            <div className="flex flex-col mt-6">
              <label className="font-medium mb-2">Role</label>
              <Field
                className="formInput"
                placeholder="Please input your full name"
                as="select"
                name="role"
                value={values.role}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option>Type User</option>
                <option value="user">user</option>
                <option value="admin">admin</option>
              </Field>
              {errors.role && (
                <p className="text-red-500 mt-2">{errors.role}</p>
              )}
            </div>
          </Form>
        </Formik>
      </Drawer>
    </>
  );
};
export default DrawerUpdateUser;
