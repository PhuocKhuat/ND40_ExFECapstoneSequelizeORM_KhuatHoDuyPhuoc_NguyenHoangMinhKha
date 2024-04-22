import React, { useState } from "react";
import { Button, Modal } from "antd";
import TabPane from "../TabPane/TabPane.js";

const Modals = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" 
      onClick={showModal}>
        Login/ Signup
      </Button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer
      >
        <TabPane />
      </Modal>
    </>
  );
};
export default Modals;
