import React from "react";
import firesense from "../assets/imgs/firesense.png";
import "../css/sidebar.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isSidebarOpen }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("loggedIn");
    Cookies.remove("email");
    Cookies.remove("role");
    alert("Logout successful!");
    navigate("/");
  };
  return (
    <div
      className={`sidebar text-white flex flex-col ${
        isSidebarOpen ? "active" : ""
      }`}
    >
      <div className="logo mb-12">
        <a href="/admin/home">
          <img src={firesense} alt="Logo" className="w-full" />
        </a>
      </div>

      {/* Links */}
      <div className="try flex flex-col space-y-4 pr-2 w-full ">
        <a
          href="/admin/home"
          className="text-xl font-semibold hover:text-orange-300 p-2 bg-orange-700 rounded-r border-r-16 border-orange-600 py-4 px-8"
        >
          Fire Forecast
        </a>
        <a
          href="/admin/live"
          className="text-xl font-semibold hover:text-orange-300 p-2 bg-orange-700 rounded-r border-r-6 border-orange-600 py-4 px-8"
        >
          Live Video Feed
        </a>
        <a
          href="/admin/tips"
          className="text-xl font-semibold hover:text-orange-300 p-2 bg-orange-700 rounded-r border-r-6 border-orange-600 py-4 px-8"
        >
          Fire Tips & Knowledge
        </a>
        <a
          href="/admin/advisory"
          className="text-xl font-semibold hover:text-orange-300 p-2 bg-orange-700 rounded-r border-r-6 border-orange-600 py-4 px-8"
        >
          Create Advisory
        </a>
        <a
          href="/admin/livestream"
          className="text-xl font-semibold hover:text-orange-300 p-2 bg-orange-700 rounded-r border-r-6 border-orange-600 py-4 px-8"
        >
          Broadcast Live
        </a>
      </div>
      <a
        href="/"
        onClick={handleLogout}
        className="text-xl font-semibold hover:text-orange-300 p-2 bg-orange-700 rounded-r border-r-6 border-orange-600 py-4 px-8 my-8"
      >
        Logout
      </a>
    </div>
  );
};

export default Sidebar;
