import React, { useState } from "react";
import SidebarAdmin from "../components/AdminSidebar";
import Header from "../components/Header";
import "../css/homepage.css";
import "../css/tips.css";
import arrow from "../assets/imgs/right-arrow.png";
import leftarrow from "../assets/imgs/left-arrow.png";
import Firecasesgraph from "../components/FireCasesGraph";
import userlogo from "../assets/imgs/user.png";
import Cookies from "js-cookie";

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showKey, setShowKey] = useState(false);
  const username = Cookies.get("username");
  const email = Cookies.get("email");
  const role = Cookies.get("role");

  const toggleKeyVisibility = () => {
    setShowKey(!showKey);
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log(isSidebarOpen);
  };
  return (
    <div className="homepage flex bg-gray-200">
      <SidebarAdmin className="w-1/6" isSidebarOpen={isSidebarOpen} />
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
        <div className="profile flex flex-row items-center">
          <div className="rounded-full overflow-hidden mr-16 bg-black p-2">
            <img src={userlogo} alt="$" className="h-24 w-24"></img>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Username: {username}</h3>
            <h3 className="text-lg font-medium mb-2">Role: {role}</h3>
            <h3 className="text-base font-normal mb-2">Email: {email}</h3>
            <h3>
              Streaming Key:{" "}
              <span onClick={toggleKeyVisibility} style={{ cursor: "pointer" }}>
                {showKey ? "E1JZo-NTfjB" : "**********"}
              </span>
            </h3>
          </div>
        </div>

        <Firecasesgraph />
      </div>
    </div>
  );
};

export default HomePage;