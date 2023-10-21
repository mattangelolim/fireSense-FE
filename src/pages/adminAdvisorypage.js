import React, { useState, useEffect } from "react";
import axios from "axios";
import SidebarAdmin from "../components/AdminSidebar";
import CreateAdvisory from "../components/CreateAdvisory";
import Header from "../components/Header";
import "../css/advisory.css";
import "../css/tips.css";
import arrow from "../assets/imgs/right-arrow.png";
import leftarrow from "../assets/imgs/left-arrow.png";
import moment from "moment-timezone";

const AdminAdvisory = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [announcements, setAnnouncements] = useState([]);
  // const [isExpired, setIsExpired] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = announcements.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    // Fetch announcements when the component mounts
    axios
      .get("http://3.27.218.228:9000/api/all/announcements")
      .then((response) => {
        setAnnouncements(response.data.announcements);
        // console.log(response.data.announcements);
      })
      .catch((error) => {
        console.error("Error fetching announcements:", error);
      });
  }, []);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log(isSidebarOpen);
  };

  const deleteAdvisory = (id) => {
    axios
      .post("http://3.27.218.228:9000/api/advisory/delete", {
        id: id,
      })
      .then((response) => {
        if (response.data.success) {
          alert("Live deleted successfully");
          window.location.reload();
        } else {
          alert("Error deleting live");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="advisory-page flex bg-gray-200">
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
        <div className="flex flex-row justify-center item-center">
          <CreateAdvisory />
        </div>
        <div className="flex flex-row justify-center item-center my-4">
          <div className="border-2 border-gray-300 w-5/6">
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 border-b border-gray-300">
                    Announcement
                  </th>
                  <th className="py-2 px-4 border-b border-gray-300">
                    District
                  </th>
                  <th className="py-2 px-4 border-b border-gray-300">Status</th>
                  <th className="py-2 px-4 border-b border-gray-300">Action</th>
                </tr>
              </thead>
              <tbody className="">
                {currentItems.map((announcement, index) => {
                  const expirationDate = announcement.expirationDate;
                  const formattedExpirationDate = moment(expirationDate)
                    .tz("Asia/Manila")
                    .subtract(8, "hours")
                    .format("YYYY-MM-DD HH:mm:ss");
                  const now = moment().tz("Asia/Manila");
                  const current = now.format("YYYY-MM-DD HH:mm:ss");
                  const isExpired = formattedExpirationDate <= current;

                  return (
                    <tr key={index}>
                      <td className="py-2 px-4 border-b w-2/3">
                        {announcement.announcement}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {announcement.district}
                      </td>
                      <td
                        className={`py-2 px-4 border-b text-center ${
                          isExpired ? "text-red-500" : "text-green-500"
                        }`}
                      >
                        {isExpired ? "Not Active" : "Active"}
                      </td>
                      <td className="py-2 px-4 border-b text-center text-red-500 cursor-pointer">
                        <h3 onClick={() => deleteAdvisory(announcement.id)}>
                          DELETE
                        </h3>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-4">
          <ul className="flex text-center justify-center">
            {Array(Math.ceil(announcements.length / itemsPerPage))
              .fill()
              .map((_, i) => (
                <li key={i}>
                  <button
                    onClick={() => paginate(i + 1)}
                    className={`mx-1 p-2 border rounded ${
                      currentPage === i + 1 ? "bg-gray-500 text-white" : ""
                    }`}
                  >
                    Page {i + 1}
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminAdvisory;
