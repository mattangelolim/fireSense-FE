import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/advisory.css";

const CreateAdvisory = () => {
  const [announcement, setAnnouncement] = useState("");
  const [expirationHours, setExpirationHours] = useState(0);
  const [expirationMinutes, setExpirationMinutes] = useState(0);
  const [expirationSeconds, setExpirationSeconds] = useState(0);
  const [district, setSelectedDistrict] = useState("Disctrict 1");
  const [alert, setAlert] = useState("Alert 1")

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  const handleAnnouncementChange = (e) => {
    setAnnouncement(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Send POST request using Axios
      const response = await axios.post("http://3.27.218.228:9000/admin/advisory", {
        announcement,
        expirationHours,
        expirationMinutes,
        expirationSeconds,
        district:district,
        alert:alert
      });
  
      window.alert("ADVISORY CREATED SUCCESSFULLY");
      window.location.reload();
      console.log("Advisory created:", response.data);
    } catch (error) {
      console.error("Error creating advisory:", error);
    }
  
    setAnnouncement("");
    setExpirationHours(0);
    setExpirationMinutes(0);
    setExpirationSeconds(0);
    setSelectedDistrict("District 1");
  };

  return (
    <div className="advisory mx-10 py-10 px-10 bg-white h-1/3 w-2/3">
      {" "}
      {/* Adjust margin as needed */}
      <h2 className="text-2xl font-bold mb-2">
        Create an Advisory/Announcement
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-row">
          <div className="flex flex-col space-y-2 w-full">
            <label className="font-bold">Announcement:</label>
            <textarea
              type="text"
              value={announcement}
              onChange={handleAnnouncementChange}
              className="border border-gray-300 px-2 py-1 rounded h-24 text-lg"
              required
            />
          </div>
          <div className="w-auto ml-10">
            <div className="flex flex-col space-y-2 mb-4">
              <label className="font-bold">Expiration Hours:</label>
              <div className="flex space-x-2">
                <select
                  value={expirationHours}
                  onChange={(e) => {
                    setExpirationHours(e.target.value);
                  }}
                  className="border border-gray-300 px-2 py-1 rounded w-16 text-lg"
                  required
                >
                  {Array.from({ length: 24 }).map((_, i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
                <span className="font-bold">:</span>
                <select
                  value={expirationMinutes}
                  onChange={(e) => {
                    setExpirationMinutes(e.target.value);
                  }}
                  className="border border-gray-300 px-2 py-1 rounded w-16 text-lg"
                  required
                >
                  {Array.from({ length: 60 }).map((_, i) => (
                    <option key={i} value={i}>
                      {i < 10 ? `0${i}` : i}
                    </option>
                  ))}
                </select>
                <span className="font-bold">:</span>
                <select
                  value={expirationSeconds}
                  onChange={(e) => {
                    setExpirationSeconds(e.target.value);
                  }}
                  className="border border-gray-300 px-2 py-1 rounded w-16 text-lg"
                  required
                >
                  {Array.from({ length: 60 }).map((_, i) => (
                    <option key={i} value={i}>
                      {i < 10 ? `0${i}` : i}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col space-y-2 mb-4">
              <label className="font-bold">Select District:</label>
              <select
                id="district"
                value={district}
                onChange={handleDistrictChange}
                className="border border-gray-300 px-2 py-1 rounded w-64 text-lg"
                required
              >
                <option value="District 1">District 1</option>
                <option value="District 2">District 2</option>
                <option value="District 3">District 3</option>
                <option value="District 4">District 4</option>
                <option value="District 5">District 5</option>
                <option value="District 6">District 6</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2 mb-4">
              <label className="font-bold">Select Alert:</label>
              <select
                id="alert"
                value={alert}
                onChange={(e) => setAlert(e.target.value)}
                className="border border-gray-300 px-2 py-1 rounded w-64 text-lg"
                required
              >
                <option value="Alert 1">Alert 1</option>
                <option value="Alert 2">Alert 2</option>
                <option value="Alert 3">Alert 3</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Create Advisory
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateAdvisory;
