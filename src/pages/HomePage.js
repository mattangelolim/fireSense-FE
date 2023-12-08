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
import MovingAverageGraph from "../components/MovingAverageGraphUser";

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
    <div className="homepageAdmin flex bg-gray-200">
      <Sidebar className="left w-1/6" isSidebarOpen={isSidebarOpen} />
      <div className="right w-5/6">
        <Header />
        <Firecasesgraph />
        <MovingAverageGraph />
      </div>
    </div>
  );
};

export default HomePage;
