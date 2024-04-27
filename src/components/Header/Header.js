import React from "react";
import Modals from "../../pages/LoginPage/Modal/Modals";
import { GitlabOutlined, LogoutOutlined } from "@ant-design/icons";
import "./styleHeader.scss";
import { useSelector } from "react-redux";

export default function Header() {
  const { users } = useSelector((state) => state.reducerLogin);
  console.log("🚀 ~ Header ~ users:", users);
  const renderUsers = () => {
    if (users) {
      return (
        <>
          <div className="space-x-2">
            <span className="text-white">Hi, {users?.data?.email}</span>
            <button
              onClick={() => {
                localStorage.removeItem("LOGIN_USER");
                window.location.reload();
              }}
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
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <p className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <GitlabOutlined className="text-2xl logoHome flex justify-center items-center" />
          <span className="ml-3 text-xl">Lovecats</span>
        </p>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-white">First Link</a>
          <a className="mr-5 hover:text-white">Second Link</a>
          <a className="mr-5 hover:text-white">Third Link</a>
          <a className="mr-5 hover:text-white">Fourth Link</a>
        </nav>
        {renderUsers()}
      </div>
    </header>
  );
}
