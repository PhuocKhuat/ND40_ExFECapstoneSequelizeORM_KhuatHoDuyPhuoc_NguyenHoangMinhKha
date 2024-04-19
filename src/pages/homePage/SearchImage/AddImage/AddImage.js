import React from "react";
import { Button, Flex } from "antd";

export default function AddImage() {
  return (
    <Flex gap="small" wrap="wrap">
      <Button type="primary">+ Add Image</Button>
    </Flex>
  );
}
