import React from "react";
import Modals from "../../pages/LoginPage/Modal/Modals";
import {
  GitlabOutlined,
  LogoutOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./styleHeader.scss";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Header() {
  const { users } = useSelector((state) => state.reducerLogin);
  console.log("🚀 ~ Header ~ users:", users);

  const renderUsers = () => {
    if (users?.data.role === "user") {
      return (
        <>
          <div className="flex space-x-4">
            <div className="space-x-2">
              <NavLink className=" text-xl" to="/show-user-info">
                <UserOutlined />
              </NavLink>
              <span className="text-white">Hi, {users.data?.email}</span>
            </div>
            <div>
              <button
                onClick={() => {
                  localStorage.removeItem("LOGIN_USER");
                  window.location.href = "/";
                }}
                className="text-xl"
              >
                <LogoutOutlined />
              </button>
            </div>
          </div>
        </>
      );
    } else if (users?.data.role === "admin") {
      return (
        <>
          <div className="flex space-x-4">
            <div>
              <div className="space-x-2">
                <NavLink className=" text-xl" to="">
                  <SettingOutlined />
                </NavLink>
                <span className="text-white">Hi, {users.data?.email}</span>
              </div>
            </div>
            <button
              onClick={() => {
                localStorage.removeItem("LOGIN_USER");
                window.location.href = "/";
              }}
              className="text-xl"
            >
              <LogoutOutlined />
            </button>
          </div>
        </>
      );
    } else {
      return <Modals />;
    }
  };
  return (
    <header className="text-gray-600 body-font bg-black header">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <button
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <GitlabOutlined className="text-2xl logoHome flex justify-center items-center" />
          <span className="ml-3 text-xl">Lovecats</span>
        </button>

        {renderUsers()}
      </div>
    </header>
  );
}
