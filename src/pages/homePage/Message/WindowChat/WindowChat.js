import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardFooter,
} from "mdb-react-ui-kit";
import { Field, Form, Formik } from "formik";
import { CloseOutlined } from "@ant-design/icons";

export default function WindowChat({ open, close, selectedFriend }) {
  console.log("🚀 ~ WindowChat ~ selectedFriend:", selectedFriend);

  if (!open || !selectedFriend) {
    return null;
  }

  return (
    <div className="flex justify-end">
      <div
        className="fixed"
        style={{ width: "480px", marginTop: "140px" }}
      >
        <MDBContainer
          className="pt-1 pb-3 bg-gray-100 rounded-l-lg rounded-r-lg"
          style={{ height: "500px" }}
        >
          <MDBRow className="flex justify-center">
            <MDBCol md="8" lg="6" xl="4">
              <MDBCard id="chat1" style={{ borderRadius: "15px" }}>
                <MDBCardHeader
                  className="flex justify-between items-center p-2  text-white border-b-2"
                  style={{
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <img
                      src="/imgs/icon-user.jpg"
                      alt="avatar 1"
                      className="rounded-full h-10 w-10"
                    />
                    <div>
                      <p className="text-black">{selectedFriend.fullName}</p>
                      <p className="text-sm text-gray-400">Is Activing</p>
                    </div>
                  </div>

                  <div className="text-red-500 cursor-pointer" onClick={close}>
                    <CloseOutlined />
                  </div>
                </MDBCardHeader>

                <MDBCardBody>
                  <div className="flex justify-start mt-6 mb-4 p-2">
                    <img
                      src="/imgs/icon-user.jpg"
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
                      <p className="text-sm mb-0">
                        Hello and thank you for visiting MDBootstrap. Please
                        click the video below.
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end mb-4">
                    <div
                      className="p-3 me-3 border"
                      style={{
                        borderRadius: "15px",
                        backgroundColor: "#fbfbfb",
                      }}
                    >
                      <p className="text-sm mb-0">
                        Thank you, I really like your product.
                      </p>
                    </div>
                  </div>
                </MDBCardBody>

                <MDBCardFooter>
                  <Formik>
                    <Form>
                      <div className="px-3 mt-40">
                        <Field
                          className="bg-gray-200 outline-none rounded-lg p-1 w-full"
                          placeholder="Aa"
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
