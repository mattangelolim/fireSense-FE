import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "../css/homepage.css";
import "../css/tips.css";
import arrow from "../assets/imgs/right-arrow.png";
import leftarrow from "../assets/imgs/left-arrow.png";
import Firecasesgraph from "../components/FireCasesGraph";
import userlogo from "../assets/imgs/user2.png";
import Cookies from "js-cookie";

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const [showKey, setShowKey] = useState(false);
  const username = Cookies.get("username");
  const email = Cookies.get("email");
  const role = Cookies.get("role");
  const district = Cookies.get("district");

  // const toggleKeyVisibility = () => {
  //   setShowKey(!showKey);
  // };

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log(isSidebarOpen);
  };
  return (
    <div className="homepage flex bg-gray-200">
      <Sidebar className="left w-1/6" isSidebarOpen={isSidebarOpen} />
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
        <div className="profile flex flex-col md:flex-row items-center">
          <div className="img-div md:mr-16 mb-4 md:mb-0 rounded-full overflow-hidden bg-orange-100 p-2">
            <img src={userlogo} alt="$" className="img-logo h-24 w-24" />
          </div>
          <div className="text-profile">
            <h3 className="text-xl font-bold mb-2">Username: {username}</h3>
            <h3 className="text-lg font-medium mb-2">
              Role: {role} at {district}
            </h3>
            <h3 className="text-base font-normal mb-2">Email: {email}</h3>
          </div>
        </div>
        <Firecasesgraph />
      </div>
    </div>
  );
};

export default HomePage;
