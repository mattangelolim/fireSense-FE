import React from "react";
import firesense from "../assets/imgs/firesense.png";
import "../css/sidebar.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("loggedIn");
    alert("Logout successful!");
    navigate("/");
  };
  return (
    <div className="sidebar text-white h-screen w-1/5 py-2 flex flex-col">
      {/* Logo */}
      <div className="mb-4">
        <img src={firesense} alt="Logo" className="w-full" />
      </div>

      {/* Links */}
      <div className="flex flex-col space-y-4 pr-2 ">
        <a
          href="#"
          className="text-xl font-semibold hover:text-orange-300 p-2 bg-orange-700 rounded-r border-r-16 border-orange-600 py-4 px-8"
        >
          Fire Forecast
        </a>
        <a
          href="#"
          className="text-xl font-semibold hover:text-orange-300 p-2 bg-orange-700 rounded-r border-r-6 border-orange-600 py-4 px-8"
        >
          Live Video Feed
        </a>
        <a
          href="#"
          className="text-xl font-semibold hover:text-orange-300 p-2 bg-orange-700 rounded-r border-r-6 border-orange-600 py-4 px-8"
        >
          Fire Tips & Knowledge
        </a>
        <a
          href="#"
          className="text-xl font-semibold hover:text-orange-300 p-2 bg-orange-700 rounded-r border-r-6 border-orange-600 py-4 px-8"
        >
          FAQs
        </a>
        <a
          href="#"
          className="text-xl font-semibold hover:text-orange-300 p-2 bg-orange-700 rounded-r border-r-6 border-orange-600 py-4 px-8"
        >
          Contact Us
        </a>
      </div>
      <a
        href="#"
        onClick={handleLogout}
        className="text-xl font-semibold hover:text-orange-300 p-2 bg-orange-700 rounded-r border-r-6 border-orange-600 py-4 px-8 mt-52"
      >
        Logout
      </a>
    </div>
  );
};

export default Sidebar;
