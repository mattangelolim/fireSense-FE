import React from "react";
import "./App.css";
import Login from "./pages/LoginPage";
import Home from "./pages/HomePage";
import Adminhome from "./pages/AdminHomepage";
import AdminAdvisory from "./pages/adminAdvisorypage.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Cookies from "js-cookie";

function App() {
  const loggedIn = Cookies.get("loggedIn") === "true";

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={loggedIn ? <Navigate to="/home" /> : <Login />}
          />
          <Route path="/home" element={<Home />} />
          <Route path="/admin/home" element={<Adminhome />} />
          <Route path="/admin/advisory" element={<AdminAdvisory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
