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
        setAnnouncements(response.data.announcements);
        console.log(response.data.announcements);
      })
      .catch((error) => {
        console.error("Error fetching announcements:", error);
      });
  }, []);

  const totalCharacters = announcements.reduce(
    (acc, announcement) => acc + announcement.announcement.length,
    0
  );

  const marqueeSpeed = Math.max(30, totalCharacters / 5);

  return (
    <div className="header bg-orange-900 text-white p-4 overflow-hidden mb-4 h-16">
      <div className="marquee-container">
      <span className="marquee text-xl font-bold" style={{ animationDuration: `${marqueeSpeed}s` }}>
          ADVISORY PANEL!!{" "}
          {announcements &&
            announcements.length > 0 &&
            announcements.map((announcement, index) => (
              <React.Fragment key={index}>
                {` ${index + 1}. ${announcement.announcement} `}
              </React.Fragment>
            ))}
        </span>
      </div>
    </div>
  );
};

export default Header;
