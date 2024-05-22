import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function ListChat() {
  return (
    <div className="flex justify-end">
      <div className="fixed">
        <MDBContainer
          fluid
          className="py-5 w-44 h-screen"
          style={{ backgroundColor: "#eee" }}
        >
          <MDBRow>
            <MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0">
              <h5 className="font-weight-bold mb-3 text-center text-lg-start">
                Member
              </h5>

              <MDBCard>
                <MDBCardBody>
                  <MDBTypography listUnStyled className="mb-0">
                    <li
                      className="p-2 border-bottom"
                      style={{ backgroundColor: "#eee" }}
                    >
                      <a href="#!" className="d-flex justify-content-between">
                        <div className="flex items-center">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp"
                            alt="avatar"
                            className="rounded-full flex align-self-center me-3 shadow-1-strong w-10 h-10"
                          />
                          <div className="pt-1">
                            <p className="fw-bold mb-0">John Doe</p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li
                      className="p-2 border-bottom"
                      style={{ backgroundColor: "#eee" }}
                    >
                      <a href="#!" className="d-flex justify-content-between">
                        <div className="flex items-center">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp"
                            alt="avatar"
                            className="rounded-full flex align-self-center me-3 shadow-1-strong w-10 h-10"
                          />
                          <div className="pt-1">
                            <p className="fw-bold mb-0">John Doe</p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li
                      className="p-2 border-bottom"
                      style={{ backgroundColor: "#eee" }}
                    >
                      <a href="#!" className="d-flex justify-content-between">
                        <div className="flex items-center">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp"
                            alt="avatar"
                            className="rounded-full flex align-self-center me-3 shadow-1-strong w-10 h-10"
                          />
                          <div className="pt-1">
                            <p className="fw-bold mb-0">John Doe</p>
                          </div>
                        </div>
                      </a>
                    </li>
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
