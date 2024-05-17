import React from "react";
import { Flex } from "antd";
import { NavLink } from "react-router-dom";
import { FileAddOutlined } from "@ant-design/icons";

export default function AddImage() {
  return (
    <Flex gap="small" wrap="wrap">
      <NavLink
        to="/add-image"
        className="text-blue-500 rounded-md flex items-center px-3"
      >
        <FileAddOutlined className="text-2xl"/>
      </NavLink>
    </Flex>
  );
}
