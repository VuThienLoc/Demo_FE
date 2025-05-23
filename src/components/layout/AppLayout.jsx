import React from "react";
import Navbar from "../bar/Navbar";
import Footer from "../bar/Footer";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
