import { Tabs } from "antd";
import React from 'react';
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";

const TabPane = () => (
<Tabs defaultActiveKey="1">
    <Tabs.TabPane tab={<span>Login</span>} key="1">
      <LoginPage/>
    </Tabs.TabPane>
    <Tabs.TabPane tab={<span>Signup</span>} key="2">
      <SignupPage/>
    </Tabs.TabPane>
  </Tabs>
)

export default TabPane;