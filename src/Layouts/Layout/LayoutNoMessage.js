import React from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

export default function LayoutNoMessage() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
