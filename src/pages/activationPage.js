import axios from "axios";
import React, { useState } from "react";
import "../css/activation.css";
import { useNavigate } from "react-router-dom";

const ActivationPage = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleActivation = async (e) => {
    e.preventDefault();

    const URL = "http://3.27.218.228:9000/user/activate";

    try {
      const response = await axios.post(URL, {
        email: email,
        code: code,
      });
      console.log(response.data);
      if (response.data.success === false) {
        alert("Invalid Email/Code Input");
      } else {
        alert("USER ACTIVATED SUCCESSFULLY");
        navigate("/");
      }
    } catch (error) {
      console.error("Error during activation", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="activation-container flex flex-col items-center bg-white">
        <input
          className="m-2 p-2 border border-gray-500 rounded w-full"
          type="email"
          placeholder="Enter the registered Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="m-2 p-2 border border-gray-500 rounded w-full"
          type="text"
          placeholder="OTP code sent to your number"
          onChange={(e) => {
            setCode(e.target.value);
          }}
        />
        <button
          className="m-2 p-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 w-full"
          onClick={handleActivation}
        >
          Activate account
        </button>
      </div>
    </div>
  );
};

export default ActivationPage;
