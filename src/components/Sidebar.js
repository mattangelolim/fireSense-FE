import React from "react";
import firesense from "../assets/imgs/firesense.png";
import "../css/sidebar.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isSidebarOpen }) => {
  const navigate = useNavigate();

  const removeAllCookies = () => {
    const cookies = Object.keys(Cookies.get());

    cookies.forEach((cookie) => {
      Cookies.remove(cookie);
    });
  };

  const handleLogout = () => {
    removeAllCookies();
    alert("Logout successful!");
    navigate("/");

    window.location.reload();
  };
  return (
    <div
      className={`sidebar text-white flex flex-col ${
        isSidebarOpen ? "active" : ""
      }`}
    >
      {/* Logo */}
      <div className="logo mb-4">
        <a href="/home">
          <img src={firesense} alt="Logo" className="w-full" />
        </a>
      </div>

      {/* Links */}
      <div className="flex flex-col space-y-2 pr-2">
        <a
          href="/home"
          className="text-xl font-semibold hover:text-orange-300 p-2 bg-orange-700 rounded-r border-r-16 border-orange-600 py-4 px-8"
        >
          Fire Forecast
        </a>
        <a
          href="/live"
          className="text-xl font-semibold hover:text-orange-300 p-2 bg-orange-700 rounded-r border-r-6 border-orange-600 py-4 px-8"
        >
          Live Video Feed
        </a>
        <a
          href="/user/tips"
          className="text-xl font-semibold hover:text-orange-300 p-2 bg-orange-700 rounded-r border-r-6 border-orange-600 py-4 px-8"
        >
          Fire Tips & Knowledge
        </a>
        <a
          href="/user/faqs"
          className="text-xl font-semibold hover:text-orange-300 p-2 bg-orange-700 rounded-r border-r-6 border-orange-600 py-4 px-8"
        >
          FAQs
        </a>
        <a
          href="/user/contact"
          className="text-xl font-semibold hover:text-orange-300 p-2 bg-orange-700 rounded-r border-r-6 border-orange-600 py-4 px-8"
        >
          Contact Us
        </a>
      </div>
      <a
        href="/"
        onClick={handleLogout}
        className="text-xl font-semibold hover:text-orange-300 p-2 bg-orange-700 rounded-r border-r-6 border-orange-600 py-4 px-8 mt-28"
      >
        Logout
      </a>
    </div>
  );
};

export default Sidebar;
