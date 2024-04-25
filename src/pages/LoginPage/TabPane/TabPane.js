import { Tabs } from "antd";
import React from "react";
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";
import { useSelector } from "react-redux";

const TabPane = () => {
  const { switchTab } = useSelector((state) => state.reducerLogin);
  console.log("🚀 ~ TabPane ~ switchTab:", switchTab)

  return (
    <Tabs defaultActiveKey="2" activeKey={switchTab}>
      <TabPane tab={<span>Login</span>} key="1">
        <LoginPage />
      </TabPane>
      <TabPane tab={<span>Signup</span>} key="2">
        <SignupPage />
      </TabPane>
    </Tabs>
  );
};

export default TabPane;
