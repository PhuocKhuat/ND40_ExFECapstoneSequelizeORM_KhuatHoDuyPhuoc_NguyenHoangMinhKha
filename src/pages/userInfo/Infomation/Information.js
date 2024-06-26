import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styleInformation.scss";
import UserInfo from "../UserInfo/UserInfo";
import { Modal } from "antd";
import { BASE_IMG_URL, UPDATE_USER_FORM_INITIAL } from "../../../action/action";
import ModalUpload from "../ModalUpload/ModalUpload";

export default function Information() {
  const { users } = useSelector((state) => state.reducerLogin);
  const { updateUserInfo, uploadAvatar } = useSelector(
    (state) => state.reducerUserInfo
  );
  console.log("🚀 ~ Information ~ uploadAvatar:", uploadAvatar);
  // console.log("🚀 ~ Information ~ updateUserInfo:", updateUserInfo);
  console.log("🚀 ~ Information ~ users:", users);

  const dispatch = useDispatch();

  const [thumb, setThumb] = useState("/imgs/icon-user.jpg");
  // console.log("🚀 ~ Information ~ thumb:", thumb);
  useEffect(() => {
    if (uploadAvatar?.avatar) {
      setThumb(`${BASE_IMG_URL}/${uploadAvatar?.avatar}`);
    }
    localStorage.setItem(
      "UPLOAD_AVATAR",
      `${BASE_IMG_URL}/${users.data?.avatar}`
    );
  }, [uploadAvatar, setThumb]);

  useEffect(() => {
    dispatch({
      type: UPDATE_USER_FORM_INITIAL,
      payload: users.data,
    });
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const showUploadModal = () => {
    setIsUploadModalOpen(true);
  };
  const handleUploadCancel = () => {
    setIsUploadModalOpen(false);
  };

  return (
    <section className="text-gray-600 body-font information">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          className="lg:w-1/4 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-full"
          alt="hero"
          src={thumb}
          onClick={showUploadModal}
        />
        <Modal open={isUploadModalOpen} onCancel={handleUploadCancel} footer>
          <ModalUpload
            handleUploadCancel={handleUploadCancel}
            initialThumb={thumb}
          />
        </Modal>
        <div className="text-center lg:w-2/3 w-full text-white">
          <h1 className="title-font sm:text-4xl text-xl mb-4 font-medium text-gray-900">
            {updateUserInfo?.fullName}
          </h1>
          <p className="mb-2 leading-relaxed text-lg">
            {updateUserInfo?.email}
          </p>
          <p className="mb-2 leading-relaxed text-lg">{updateUserInfo?.age}</p>
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
            <Modal open={isModalOpen} onCancel={handleCancel} footer>
              <UserInfo handleCancel={handleCancel} />
            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
}
