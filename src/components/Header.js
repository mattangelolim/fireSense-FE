import React from "react";
import "../css/header.css";

const Header = () => {
  return (
    <div className="bg-orange-900 text-white p-4 w-4/5 h-1/5 overflow-hidden">
      <div className="marquee-container">
        <span className="marquee text-xl font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          sollicitudin aliquam mauris, ut euismod ante condimentum at. Duis
          bibendum libero vel massa consectetur ultricies.
        </span>
      </div>
    </div>
  );
};

export default Header;
