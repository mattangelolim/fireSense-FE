import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Cookies from "js-cookie";
import Login from "./pages/LoginPage";
import Home from "./pages/HomePage";
import Adminhome from "./pages/AdminHomepage";
import AdminAdvisory from "./pages/adminAdvisorypage.js";
import ActivationPage from "./pages/activationPage";
import AdminTipsPage from "./pages/adminTipsPage";
import UserTipsPage from "./pages/resident/userTipsPage";
import UserContactPage from "./pages/resident/userContactPage";
import UserFaqsPage from "./pages/resident/userFAQsPage";
import LiveStream from "./pages/livestreamPage";
import LiveStreamUser from "./pages/livestreamPageUser";
import Broadcast from "./pages/BroadcastPage";
import MovingAverageGraph from "./components/MovingAverageGraph.js";
// import Viewer from "./components/viewer";

function App() {
  const loggedIn = Cookies.get("loggedIn") === "true";
  const userRole = Cookies.get("role");

  return (
    <div className="App">
      <Router>
        <Routes>
        <Route
            path="/admin/livestream"
            element={
              loggedIn && userRole === "admin" ? (
                <Broadcast />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/admin/live"
            element={
              loggedIn && userRole === "admin" ? (
                <LiveStream />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/live"
            element={
              loggedIn && userRole !== "admin" ? (
                <LiveStreamUser />
              ) : (
                <Navigate to="/" />
              )
            }
          />
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
            path="/user/tips"
            element={
              loggedIn && userRole !== "admin" ? (
                <UserTipsPage />
              ) : (
                <Navigate to="/" />
              )
            }
          />
                  <Route
            path="/user/contact"
            element={
              loggedIn && userRole !== "admin" ? (
                <UserContactPage />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/user/faqs"
            element={
              loggedIn && userRole !== "admin" ? (
                <UserFaqsPage />
              ) : (
                <Navigate to="/" />
              )
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
          <Route
            path="/admin/tips"
            element={
              loggedIn && userRole === "admin" ? (
                <AdminTipsPage />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route path="/account/activation" element={<ActivationPage />} />
          {/* <Route path="/moving" element={<MovingAverageGraph />} /> */}


          {/* Add a catch-all route */}
          <Route element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
