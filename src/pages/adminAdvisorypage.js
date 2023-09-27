import React from "react";
import SidebarAdmin from "../components/AdminSidebar";
import CreateAdvisory from "../components/CreateAdvisory";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <div className="flex">
      <SidebarAdmin />
      <Header />
      <CreateAdvisory />
    </div>
  );
};

export default HomePage;
