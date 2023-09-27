import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Header />
      {/* <CreateAdvisory /> */}
    </div>
  );
};

export default HomePage;
