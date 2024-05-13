import { Tabs } from "antd";
import React from "react";
import "./imageManagement.scss";
import SavedImage from "../SavedImage/SavedImage";
import CreatedImage from "../CreatedImage/CreatedImage";
import "../../../common/styleCommon.css"

const ImageManagement = () => (
  <div className="imageManagement">
    <div className="container">
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Saved image" key="1">
          <SavedImage />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Created image" key="2">
          <CreatedImage />
        </Tabs.TabPane>
      </Tabs>
    </div>
  </div>
);

export default ImageManagement;
