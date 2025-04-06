import React from "react";
import { Outlet, Link, Navigate } from "react-router-dom";
import CustomHamburgerMenu from "../CustomHamburgerMenu";
import { useAuth } from "../hooks/AuthProvider";
import FooterSection from "../footer/Footer";
const Layout = () => {
  // const auth = useAuth();

  // if (auth.user) return <Navigate to="/login" />;
  return (
    <>
      <CustomHamburgerMenu />
      <Outlet />
      <FooterSection />
    </>
  );
};

export default Layout;
