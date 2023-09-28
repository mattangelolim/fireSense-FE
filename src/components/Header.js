import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/header.css";

const Header = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    // Fetch announcements when the component mounts
    axios
      .get("http://localhost:9000/api/announcements")
      .then((response) => {
        setAnnouncements(response.data.announcement);
      })
      .catch((error) => {
        console.error("Error fetching announcements:", error);
      });
  }, []); // Empty dependency array means this effect runs once when component mounts

  return (
    <div className="bg-orange-900 text-white p-4 overflow-hidden">
      <div className="marquee-container">
        <span className="marquee text-xl font-bold">
          {announcements.map((announcement, index) => (
            <React.Fragment key={index}>
              {announcement.announcement}{" "}
              {/* Assuming the API returns an array of objects with an 'announcement' property */}
            </React.Fragment>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Header;
