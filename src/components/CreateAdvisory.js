import React, { useState } from "react";
import axios from "axios";
import "../css/advisory.css";

const CreateAdvisory = () => {
  const [announcement, setAnnouncement] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("all");

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  const handleAnnouncementChange = (e) => {
    setAnnouncement(e.target.value);
  };

  const handleExpirationDateChange = (e) => {
    setExpirationDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send POST request using Axios
    axios
      .post("http://localhost:9000/admin/advisories", {
        announcement,
        expirationDate,
      })
      .then((response) => {
        console.log("Advisory created:", response.data);
      })
      .catch((error) => {
        console.error("Error creating advisory:", error);
      });
    setAnnouncement("");
    setExpirationDate("");
  };

  return (
    <div className="advisory my-10 mx-20 py-10 px-10">
      {" "}
      {/* Adjust margin as needed */}
      <h2 className="text-2xl font-bold mb-2">
        Create an Advisory/Announcement
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="announcement" className="font-bold">
            Announcement:
          </label>
          <textarea
            type="text"
            value={announcement}
            onChange={handleAnnouncementChange}
            className="border border-gray-300 px-2 py-1 rounded h-24 text-lg"
            required
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="expirationDate" className="font-bold">
            Expiration Date:
          </label>
          <input
            type="date"
            value={expirationDate}
            onChange={handleExpirationDateChange}
            className="border border-gray-300 px-2 py-1 rounded w-64 text-lg"
            required
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="district" className="font-bold">
            Select District:
          </label>
          <select
            id="district"
            value={selectedDistrict}
            onChange={handleDistrictChange}
            className="border border-gray-300 px-2 py-1 rounded w-64 text-lg"
            required
          >
            <option value="all">All</option>
            <option value="1">District 1</option>
            <option value="2">District 2</option>
            <option value="3">District 3</option>
            <option value="4">District 4</option>
            <option value="5">District 5</option>
            <option value="6">District 6</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Advisory
        </button>
      </form>
    </div>
  );
};

export default CreateAdvisory;
