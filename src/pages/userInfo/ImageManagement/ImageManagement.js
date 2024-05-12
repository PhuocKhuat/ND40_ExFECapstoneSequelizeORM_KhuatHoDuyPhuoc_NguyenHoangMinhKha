import { Tabs } from "antd";
import React from "react";
import "./imageManagement.scss";
import SavedImage from "../SavedImage/SavedImage";

const ImageManagement = () => (
  <div className="imageManagement">
    <Tabs defaultActiveKey="1">
      <Tabs.TabPane tab="Saved image" key="1">
        <SavedImage />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Created image" key="2">
        Content of Tab Pane 2
      </Tabs.TabPane>
    </Tabs>
  </div>
);

export default ImageManagement;
