import React from "react";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import "./styleModals.scss";
import { useDispatch } from "react-redux";

const Modals = ({ isModalOpen, handleCancel, type, payload }) => {
  console.log("🚀 ~ Modals ~ payload:", payload)
  const dispatch = useDispatch();

  return (
    <>
      <Modal open={isModalOpen} onCancel={handleCancel} footer>
        <div className="modals">
          <div>
            <h1 className="fs-5 ms-48 mb-4">
              <ExclamationCircleOutlined className="logoInfo" />
            </h1>
          </div>
          <div>
            <h1 className="text-center text-3xl font-medium mb-4">
              Are you sure ?
            </h1>
            <p className="text-center text-xl">
              You won't be able to revert this!
            </p>
          </div>
          <div className="mt-4 ms-28">
            <button
              type="button"
              className="btn btn-primary btnDeleteImage"
              onClick={() => {
                dispatch({
                  type,
                  payload,
                });
                handleCancel();
              }}
            >
              Yes, delete it !
            </button>
            <button
              type="button"
              className="btn btn-secondary ms-2 btnCancelImage"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default Modals;
