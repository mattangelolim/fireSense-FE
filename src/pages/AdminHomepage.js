import React, { useState } from "react";
import SidebarAdmin from "../components/AdminSidebar";
import Header from "../components/Header";
import "../css/homepage.css";
import "../css/tips.css";
import arrow from "../assets/imgs/right-arrow.png";
import leftarrow from "../assets/imgs/left-arrow.png";
import Firecasesgraph from "../components/FireCasesGraph";
import AddCaseModal from "../components/adminAddCase";
import Cookies from "js-cookie";
import MovingAverageGraph from "../components/MovingAverageGraph";

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showKey, setShowKey] = useState(false);
  const username = Cookies.get("username");
  const email = Cookies.get("email");
  const role = Cookies.get("role");

  const toggleKeyVisibility = () => {
    setShowKey(!showKey);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log(isSidebarOpen);
  };
  return (
    <div className="homepageAdmin flex bg-gray-200">  
        <AddCaseModal isOpen={isModalOpen} onClose={closeModal} />
      <SidebarAdmin className="w-1/6" isSidebarOpen={isSidebarOpen} />
      <div className="right w-5/6">
        <Header />
        <div
          className={`hidden md:flex bg-gray-200 py-8 cursor-pointer absolute top-1/2 transform -translate-y-1/2 left-0 justify-center items-center hidden rounded-tr rounded-br ${isSidebarOpen ? "active" : ""
            }`}
        >
          <img
            className="h-4 w-4 object-contain"
            src={isSidebarOpen ? leftarrow : arrow}
            alt="#"
            onClick={handleSidebarToggle}
          />
        </div>
        <div className="reletive">
          <Firecasesgraph />
          <button
            className="absolute top-20 right-10 justify-center items-center h-fit px-4 py-3 rounded-xl font-heading font-semibold text-orange-900 bg-secondary300 border hover:bg-gray hover:bg-opacity-10 hover:text-secondary300 hover:border hover:border-secondary300"
            onClick={openModal}
          >
            Report a Case +
          </button>
        </div>
    

        <MovingAverageGraph />
      </div>

    </div>
  );
};

export default HomePage;
