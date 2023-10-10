import React, { useState, useEffect } from "react";
import axios from "axios";
import SidebarAdmin from "../components/AdminSidebar";
import Header from "../components/Header";
import "../css/homepage.css";
import "../css/tips.css";
import "../css/broadcast.css";
import add from "../assets/imgs/plus.png";
import LiveRegistrationModal from "../components/LiveRegistrationModal";
import arrow from "../assets/imgs/right-arrow.png";
import leftarrow from "../assets/imgs/left-arrow.png";

const BroadcastPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isLive, setIsLive] = useState(true);
  const [liveData, setLiveData] = useState([]);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log(isSidebarOpen);
  };

  const handleButtonClick = async (id, endLive) => {
    try {
      if (endLive) {
        const response = await axios.post(
          "http://localhost:9000/api/live/delete",
          {
            id: id,
          }
        );

        if (response.data.success) {
          alert("Live deleted successfully");
          window.location.reload();
        } else {
          alert("Error deleting live");
        }
      } else {
        const response = await axios.post(
          "http://localhost:9000/api/broadcast/update",
          {
            id: id,
          }
        );

        if (response.data.success) {
          alert("Live ended successfully");
          window.location.reload();
        } else {
          alert("Error updating live");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Internal server error");
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/show/live")
      .then((response) => {
        setLiveData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching live data:", error);
      });
  }, []);
  return (
    <div className="Broadcast flex bg-gray-200">
      <SidebarAdmin className="left w-1/6" isSidebarOpen={isSidebarOpen} />
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
        <div className="broadcast-container">
          <LiveRegistrationModal isOpen={isModalOpen} onClose={closeModal} />
          <div className="flex">
            <img
              src={add}
              alt="#"
              className="w-6 h-6 cursor-pointer hover:opacity-75 mx-8"
              onClick={openModal}
            />
            <h3>Add a Livestream Information</h3>
          </div>

          <div className="broadcast-table bg-white dark:bg-neutral-700 shadow-md rounded-lg overflow-hidden m-8 w-6/7">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 dark:bg-neutral-800">
                <tr>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Live ID
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Message
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Live Started
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Live Ended
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Duration
                  </th>

                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:divide-neutral-600">
                {liveData.map((live) => (
                  <tr key={live.id}>
                    <td className="text-center w-16">{live.id}</td>
                    <td className="text-center w-16">{live.username}</td>
                    <td className=" w-32 break-all">{live.message}</td>
                    <td className="text-center w-16">{live.startLive}</td>
                    <td className="text-center w-16">{live.endLive || 0}</td>
                    <td className="text-center w-16">{live.duration || 0}</td>
                    <td className="text-center w-20">
                      <button
                        className={`${
                          live.endLive
                            ? "bg-red-500 hover:bg-red-700"
                            : "bg-blue-500 hover:bg-blue-700"
                        } text-white font-semibold py-2 px-4 rounded my-4`}
                        onClick={() => {
                          handleButtonClick(live.id, live.endLive);
                        }}
                      >
                        {live.endLive ? "Delete Live" : "End Live"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BroadcastPage;
