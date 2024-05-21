import React, { useState } from "react";
import {
  UserAddOutlined,
  PlusCircleOutlined,
  RedoOutlined,
} from "@ant-design/icons";
import { Button, Drawer, Space } from "antd";
import { Formik, Form, Field, useFormik } from "formik";
import "./styleDrawerAddUser.scss";
import { useDispatch } from "react-redux";
import { addUserSaga } from "../../action/dispatch";

const DrawerAddUser = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    fullName: "",
    password: "",
    age: "",
    role: "",
  };
  const { values, handleSubmit, handleChange, handleBlur, handleReset } =
    useFormik({
      initialValues,
      validationSchema: "",
      onSubmit: (values) => {
        console.log("🚀 ~ DrawerAddUser ~ values:", values);
      },
    });

  return (
    <>
      <Button
        type="primary"
        onClick={showDrawer}
        icon={<UserAddOutlined />}
        className="bg-green-500 text-white text-lg mb-5 p-3 rounded-lg cursor-pointer relative"
        style={{ left: "97%" }}
      ></Button>
      <Drawer
        title="Create a new user"
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
            <Button
              onClick={() => {
                dispatch(addUserSaga(values));
                onClose();
              }}
              type="primary"
              icon={<PlusCircleOutlined />}
            >
              Add User
            </Button>
          </Space>
        }
      >
        <Formik initialValues={initialValues}>
          <Form onSubmit={handleSubmit} className="drawerAddUser">
            <div className="flex flex-col">
              <label className="font-medium mb-2">Email</label>
              <Field
                className="formInput"
                placeholder="Please input your email"
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
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
            </div>
            <div className="flex flex-col mt-6">
              <label className="font-medium mb-2">Password</label>
              <Field
                className="formInput"
                placeholder="Please input your password"
                type="text"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
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
            </div>
            <div className="flex flex-col mt-6">
              <label className="font-medium mb-2">Role</label>
              <Field
                className="formInput"
                placeholder="Please input your role"
                as="select"
                name="role"
                value={values.role}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option>user</option>
                <option>admin</option>
              </Field>
            </div>
          </Form>
        </Formik>
      </Drawer>
    </>
  );
};
export default DrawerAddUser;
