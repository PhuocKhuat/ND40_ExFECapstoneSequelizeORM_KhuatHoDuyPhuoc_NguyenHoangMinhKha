import React from "react";
import ListChat from "./ListChat/ListChat";
import WindowChat from "./WindowChat/WindowChat";

export default function Message() {
  return (
    <div>
      <div>
        <ListChat />
      </div>
      <div>
        <WindowChat />
      </div>
    </div>
  );
}
