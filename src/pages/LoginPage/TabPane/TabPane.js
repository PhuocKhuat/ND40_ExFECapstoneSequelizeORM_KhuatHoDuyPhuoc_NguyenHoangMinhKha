import { Tabs } from "antd";
import React from "react";
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";
import { useDispatch, useSelector } from "react-redux";
import { SELECT_TAB } from "../../../action/action";

const TabPane = () => {
  const { switchTab } = useSelector((state) => state.reducerLogin);
  // console.log("🚀 ~ TabPane ~ switchTab:", switchTab);
  const dispatch = useDispatch();

  return (
    <Tabs defaultActiveKey="2" activeKey={switchTab} onChange={(key) => {
      console.log("🚀 ~ TabPane ~ key:", key);
      
      dispatch({type: SELECT_TAB, payload: key})
    }}>
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
