import React from "react";
import SidebarAdmin from "../components/AdminSidebar";
import CreateAdvisory from "../components/CreateAdvisory";
import Header from "../components/Header";

const AdminAdvisory = () => {
  return (
    <div className="flex">
      <SidebarAdmin className="w-1/6" />
      <div className="w-5/6">
        <Header />
        <CreateAdvisory />
      </div>
    </div>
  );
};

export default AdminAdvisory;
