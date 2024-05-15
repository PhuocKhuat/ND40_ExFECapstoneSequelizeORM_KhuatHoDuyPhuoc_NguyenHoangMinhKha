import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./styleInformation.scss";
import UserInfo from "../UserInfo/UserInfo";
import { Button, Modal } from "antd";

export default function Information() {
  const { users } = useSelector((state) => state.reducerLogin);
  console.log("🚀 ~ Information ~ users:", users);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <section className="text-gray-600 body-font information">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          className="lg:w-1/4 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-full"
          alt="hero"
          src="https://dummyimage.com/720x600"
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-xl mb-4 font-medium text-gray-900">
            {users.data.fullName}
          </h1>
          <p className="mb-2 leading-relaxed">{users.data.email}</p>
          <p className="mb-2 leading-relaxed">{users.data.age}</p>
          <p className="mb-6 leading-relaxed">0 people are following</p>
          <div className="flex justify-center space-x-5">
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Share
            </button>
            <button
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={showModal}
            >
              Edit information
            </button>
            <Modal
              open={isModalOpen}
              onCancel={handleCancel}
              footer
            >
              <UserInfo />
            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
}
