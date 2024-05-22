import React, { useState } from "react";
import { EditOutlined, RedoOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Drawer, Space } from "antd";
import { Field, Form, Formik, useFormik } from "formik";

const DrawerUpdateUser = ({user}) => {
  console.log("🚀 ~ DrawerUpdateUser ~ user:", user)
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const initialValues = {
    fullName: "",
    password: "",
    age: "",
    role: "",
  };

  const { values, handleSubmit, handleChange, handleBlur, handleReset } =
    useFormik({
      initialValues,
      onSubmit: (values) => {
        console.log("🚀 ~ DrawerUpdateUser ~ values:", values);
      },
    });

  return (
    <>
      <Button
        onClick={showDrawer}
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
            <Button onClick={onClose} type="primary" icon={<UploadOutlined />}>
              Update User
            </Button>
          </Space>
        }
      >
        <Formik>
          <Form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="font-medium mb-2">Email</label>
              <Field className="formInput cursor-not-allowed" disabled/>
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
            </div>
          </Form>
        </Formik>
      </Drawer>
    </>
  );
};
export default DrawerUpdateUser;
