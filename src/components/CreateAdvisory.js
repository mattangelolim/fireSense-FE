import React, { useState } from "react";
import axios from "axios";

const CreateAdvisory = () => {
  const [announcement, setAnnouncement] = useState("");
  const [expirationDate, setExpirationDate] = useState("");

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
    <div className="mt-10 ml-5">
      {" "}
      {/* Adjust margin as needed */}
      <h2 className="text-2xl font-bold mb-2">Create Advisory</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center space-x-2">
          <label htmlFor="announcement" className="font-bold">
            Announcement:
          </label>
          <input
            type="text"
            value={announcement}
            onChange={handleAnnouncementChange}
            className="border border-gray-300 px-2 py-1 rounded"
            required
          />
        </div>
        <div className="flex items-center space-x-2">
          <label htmlFor="expirationDate" className="font-bold">
            Expiration Date:
          </label>
          <input
            type="date"
            value={expirationDate}
            onChange={handleExpirationDateChange}
            className="border border-gray-300 px-2 py-1 rounded"
            required
          />
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
