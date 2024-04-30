import React from "react";
import { Flex } from "antd";
import { NavLink } from "react-router-dom";

export default function AddImage() {
  return (
    <Flex gap="small" wrap="wrap">
      <NavLink to="/admin/add-image" className="bg-blue-500 rounded-md flex items-center text-white px-3">+ Add Image</NavLink>
    </Flex>
  );
}
