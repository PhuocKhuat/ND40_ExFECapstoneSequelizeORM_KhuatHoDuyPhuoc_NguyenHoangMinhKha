import React, { useEffect } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardFooter,
} from "mdb-react-ui-kit";
import { Field, Form, Formik, useFormik } from "formik";
import { CloseOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getDataChat, resetDataChat } from "../../../../action/dispatch";
import { BASE_IMG_URL } from "../../../../action/action";

export default function WindowChat({
  open,
  close,
  selectedFriend,
  users,
  socket,
}) {
  // console.log("🚀 ~ users:", users)
  console.log("🚀 ~ WindowChat ~ selectedFriend:", selectedFriend);

  const initialValues = {
    message: "",
  };

  const { values, handleSubmit, handleChange, handleBlur, resetForm } =
    useFormik({
      initialValues,
      onSubmit: (values) => {
        console.log("🚀 ~ WindowChat ~ values:", values);

        let roomId = localStorage.getItem("ROOM_ID");

        socket.emit("send-message", {
          content: values.message,
          roomId,
          dateTime: new Date(),
          userId: users.data.userId,
        });

        resetForm();
      },
    });

  const { dataChat } = useSelector((state) => state.reducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleResponseMessage = (data) => {
      dispatch(getDataChat(data));
    };

    const handleDataChat = (dataArray) => {
      dispatch(resetDataChat(dataArray));
    };

    socket.on("response-message", handleResponseMessage);

    socket.on("data-chat", handleDataChat);

    return () => {
      socket.off("response-message", handleResponseMessage);
      socket.off("data-chat", handleDataChat);
    };
  }, [socket, dispatch]);

  const renderDataChat = () =>
    dataChat.map((chat) => {
      return chat.user_id === users.data.userId ? (
        <div key={chat.id}>
          <div className="text-sm text-center">{chat.date_time}</div>
          <div className="flex justify-end mb-4">
            <div
              className="p-3 me-3 border"
              style={{
                borderRadius: "15px",
                backgroundColor: "#fbfbfb",
              }}
            >
              <p className="text-sm mb-0">{chat.content}</p>
            </div>
          </div>
        </div>
      ) : (
        <div key={chat.id}>
          <div className="text-sm text-center">{chat.date_time}</div>
          <div className="flex justify-start my-1 p-2">
            <img
              src={`${BASE_IMG_URL}/${chat.avatar}`}
              alt="avatar 1"
              className="h-8 w8 rounded-full"
            />
            <div
              className="p-3 ms-3"
              style={{
                borderRadius: "15px",
                backgroundColor: "rgba(57, 192, 237,.2)",
              }}
            >
              <p className="text-sm mb-0">{chat.content}</p>
            </div>
          </div>
        </div>
      );
    });

  if (!open || !selectedFriend) {
    return null;
  }

  return (
    <div className="flex justify-end">
      <div
        className="fixed z-50"
        style={{ width: "480px", marginTop: "150px" }}
      >
        <MDBContainer
          className="pt-1 pb-3 bg-gray-100 rounded-l-lg rounded-r-lg"
          style={{ height: "500px" }}
        >
          <MDBRow className="flex justify-center">
            <MDBCol md="8" lg="6" xl="4" style={{ width: "305px" }}>
              <MDBCard id="chat1" style={{ borderRadius: "15px" }}>
                <MDBCardHeader
                  className="flex justify-between items-center p-2 text-white border-b-2"
                  style={{
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <img
                      src={`${BASE_IMG_URL}/${selectedFriend.avatar}`}
                      alt="avatar 1"
                      className="rounded-full h-10 w-10"
                    />
                    <div>
                      <p className="text-black">{selectedFriend.fullName}</p>
                      <p className="text-sm text-gray-400">Is activing</p>
                    </div>
                  </div>

                  <div className="text-red-500 cursor-pointer" onClick={close}>
                    <CloseOutlined />
                  </div>
                </MDBCardHeader>

                <MDBCardBody
                  className="overflow-y-scroll"
                  style={{ height: "340px" }}
                >
                  {renderDataChat()}
                </MDBCardBody>

                <MDBCardFooter>
                  <Formik initialValues={initialValues}>
                    <Form onSubmit={handleSubmit}>
                      <div className="px-3 mt-2">
                        <Field
                          className="bg-gray-200 outline-none rounded-lg p-1 w-full"
                          placeholder="Aa"
                          type="text"
                          name="message"
                          value={values.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                    </Form>
                  </Formik>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
}
