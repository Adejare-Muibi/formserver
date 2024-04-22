"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Navbar from "../components/landing-page/Navbar";
import DashboardNavbar from "../components/DashboardNavbar";
import { ToastContainer } from "react-toastify";
import Footer from "./landing-page/Footer";

const AppWrapper = ({ children }) => {
  const pathname = usePathname();

  const isLoggedIn = false;
  return (
    <section>
      {isLoggedIn ? (
        <DashboardNavbar />
      ) : pathname === "/login" || pathname === "/register" ? (
        ""
      ) : (
        <Navbar />
      )}
      <div>{children}</div>
      {pathname === "/login" || pathname === "/register" ? "" : <Footer />}
      <ToastContainer />
    </section>
  );
};

export default AppWrapper;
