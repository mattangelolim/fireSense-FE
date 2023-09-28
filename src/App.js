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
  const userRole = Cookies.get("role");

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              loggedIn ? (
                <Navigate to={userRole === "admin" ? "/admin/home" : "/home"} />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/home"
            element={
              loggedIn && userRole !== "admin" ? <Home /> : <Navigate to="/" />
            }
          />
          <Route
            path="/admin/home"
            element={
              loggedIn && userRole === "admin" ? (
                <Adminhome />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/admin/advisory"
            element={
              loggedIn && userRole === "admin" ? (
                <AdminAdvisory />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          {/* Add a catch-all route */}
          <Route element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
