import React, { useState } from "react";
import SidebarAdmin from "../components/AdminSidebar";
import CreateAdvisory from "../components/CreateAdvisory";
import Header from "../components/Header";
import "../css/advisory.css";
import "../css/tips.css";
import arrow from "../assets/imgs/right-arrow.png";
import leftarrow from "../assets/imgs/left-arrow.png";

const AdminAdvisory = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log(isSidebarOpen);
  };
  return (
    <div className="advisory-page flex bg-gray-200">
      <SidebarAdmin className="w-1/6" isSidebarOpen={isSidebarOpen}  />
      <div className="right w-5/6">
        <Header />
        <div
          className={`hidden md:flex bg-gray-200 py-8 cursor-pointer absolute top-1/2 transform -translate-y-1/2 left-0 justify-center items-center hidden rounded-tr rounded-br ${
            isSidebarOpen ? "active" : ""
          }`}
        >
          <img
            className="h-4 w-4 object-contain"
            src={isSidebarOpen ? leftarrow : arrow}
            alt="#"
            onClick={handleSidebarToggle}
          />
        </div>
        <CreateAdvisory />
      </div>
    </div>
  );
};

export default AdminAdvisory;
