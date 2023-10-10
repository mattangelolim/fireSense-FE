import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/header.css";

const Header = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    // Fetch announcements when the component mounts
    axios
      .get("http://3.27.218.228:9000/api/announcements")
      .then((response) => {
        setAnnouncements(response.data.announcement);
      })
      .catch((error) => {
        console.error("Error fetching announcements:", error);
      });
  }, []);

  const currentDate = new Date();

  const filteredAnnouncements = announcements.filter(
    (announcement) => new Date(announcement.expirationDate) >= currentDate
  );

  return (
    <div className="header bg-orange-900 text-white p-4 overflow-hidden mb-4 h-16">
      <div className="marquee-container">
        <span className="marquee text-xl font-bold">
          ADVISORY !! PAALALA !!{" "}
          {filteredAnnouncements.map((announcement, index) => (
            <React.Fragment key={index}>
              {announcement.announcement} ||{" "}
            </React.Fragment>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Header;
