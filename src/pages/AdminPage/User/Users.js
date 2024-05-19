import React, { useEffect } from "react";
import { Space, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_USER_SAGA, GET_USER_LIST_SAGA } from "../../../action/action";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const Users = () => {
  const { userList } = useSelector((state) => state.reducerAdmin);
  console.log("🚀 ~ Users ~ userList:", userList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_USER_LIST_SAGA });
  }, []);

  const columns = [
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      filters: userList.map((user) => ({
        text: user.email,
        value: user.email,
      })),
      onFilter: (value, record) => record.email.indexOf(value) === 0,
      sortDirections: ["descend"],
    },
    {
      title: "Full name",
      dataIndex: "fullName",
      key: "fullName",
      filters: userList.map((user) => ({
        text: user.fullName,
        value: user.fullName,
      })),
      onFilter: (value, record) => record.fullName?.indexOf(value) === 0,
      sortDirections: ["descend"],
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      filters: [
        {
          text: "User",
          value: "user",
        },
        {
          text: "Admin",
          value: "admin",
        },
      ],
      onFilter: (value, record) => record.role?.indexOf(value) === 0,
      sortDirections: ["descend"],
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle" className="cursor-pointer">
          <EditOutlined className="text-yellow-500" />
          <DeleteOutlined
            className="text-red-500"
            onClick={() => {
              dispatch({ type: DELETE_USER_SAGA, payload: record.userId });
            }}
          />
        </Space>
      ),
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <Table
      columns={columns}
      dataSource={userList}
      onChange={onChange}
      showSorterTooltip={{
        target: "sorter-icon",
      }}
    />
  );
};
export default Users;
