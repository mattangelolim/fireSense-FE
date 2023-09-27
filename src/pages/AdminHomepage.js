import React from "react";
import SidebarAdmin from "../components/AdminSidebar";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <div className="flex">
      <SidebarAdmin />
      <Header />
    </div>
  );
};

export default HomePage;
