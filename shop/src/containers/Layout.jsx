import React from "react";
import { Outlet } from "react-router-dom";
import Header from '../components/Header'

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Header/>
      {children}
      <Outlet />
    </div>
  );
};

export default Layout;