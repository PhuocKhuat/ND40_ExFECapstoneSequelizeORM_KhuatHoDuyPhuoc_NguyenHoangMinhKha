import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function ListChat({ userList, handleSelectFriend, users, socket }) {
  const renderUserList = () =>
    userList.map((user) => (
      <li
        className="p-2 border-bottom"
        style={{ backgroundColor: "#eee" }}
        key={user.userId}
        onClick={() => {
          handleSelectFriend(user);

          let roomId = "";

          if (user.userId > users.data.userId) {
            roomId = `${users.data.userId} - ${user.userId}`;
          } else {
            roomId = `${user.userId} - ${users.data.userId}`;
          }
          localStorage.setItem("ROOM_ID", roomId);
          socket.emit("join-room", roomId);
        }}
      >
        <a href="#!" className="d-flex justify-content-between">
          <div className="flex items-center">
            <img
              src="/imgs/icon-user.jpg"
              alt="avatar"
              className="rounded-full flex align-self-center me-3 shadow-1-strong w-10 h-10"
            />
            <div className="pt-1">
              <p className="fw-bold mb-0">{user.fullName}</p>
            </div>
          </div>
        </a>
      </li>
    ));

  return (
    <div className="flex justify-end">
      <div className="fixed">
        <MDBContainer
          fluid
          className="py-5 w-52 h-screen"
          style={{ backgroundColor: "#eee" }}
        >
          <MDBRow>
            <MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0">
              <h5 className="font-weight-bold mb-3 text-center text-lg-start font-medium">
                Contact person
              </h5>

              <MDBCard>
                <MDBCardBody>
                  <MDBTypography
                    listUnStyled
                    className="mb-0 overflow-y-scroll"
                    style={{ height: "500px" }}
                  >
                    {renderUserList()}
                  </MDBTypography>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
}
