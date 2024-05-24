import React, { useEffect, useState } from "react";
import ListChat from "./ListChat/ListChat";
import WindowChat from "./WindowChat/WindowChat";
import { useDispatch, useSelector } from "react-redux";
import { getUserListSaga } from "../../../action/dispatch";
import { io } from "socket.io-client";

const socket = io("ws://localhost:8081");

export default function Message() {
  const { userList } = useSelector((state) => state.reducerAdmin);
  console.log("🚀 ~ ListChat ~ userList:", userList);
  const { users } = useSelector((state) => state.reducerLogin);
  // console.log("🚀 ~ WindowChat ~ users:", users.data.userId);

  const [selectedFriend, setSelectedFriend] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setSelectedFriend(null);
    setShowModal(false);
  };

  const handleSelectFriend = (user) => {
    setSelectedFriend(user);
    setShowModal(true);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserListSaga());
  }, []);
  
  return (
    <div>
      <div>
        <ListChat userList={userList} handleSelectFriend={handleSelectFriend} users={users} socket={socket}/>
      </div>
      <div>
        <WindowChat open={showModal} close={handleCloseModal} selectedFriend={selectedFriend} users={users} socket={socket}/>
      </div>
    </div>
  );
}
