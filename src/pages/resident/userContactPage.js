import React, { useState } from "react";
import "../../css/tips.css";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import arrow from "../../assets/imgs/right-arrow.png";
import leftarrow from "../../assets/imgs/left-arrow.png";
import maps from "../../assets/imgs/maps.png";

const ContactPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="contact-page flex bg-gray-200">
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
        <div className="container mx-auto p-10 bg-white">
          <div className="max-w-2xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">
              Bureau of Fire Protection
            </h2>
            <p className="mb-2">
              Agham Road, Barangay Bagong Pag-Asa, Quezon City
            </p>

            <h3 className="text-xl font-bold mt-4 mb-2">Trunk Line Numbers:</h3>
            <ul className="list-disc pl-4 mb-4">
              <li>(02) 8426-0246</li>
              <li>(02) 8426-0219</li>
            </ul>

            <h3 className="text-xl font-bold mb-2">Email Address:</h3>
            <ul className="list-disc pl-4 mb-8">
              <li>
                <a href="mailto:ofc@bfp.gov.ph" className="text-blue-500">
                  ofc@bfp.gov.ph
                </a>{" "}
                (Office of the Chief BFP)
              </li>
              <li>
                <a href="mailto:pis@bfp.gov.ph" className="text-blue-500">
                  pis@bfp.gov.ph
                </a>{" "}
                (Public Information Service)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
