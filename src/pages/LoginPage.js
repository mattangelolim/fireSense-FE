import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import firebg from "../assets/imgs/login-bg.jpg";
import logo from "../assets/imgs/firesense.png";
import "../css/login.css";
import Cookies from "js-cookie";

const LoginPage = () => {
  // LOGIN CREDENTIALS
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // FOR REGISTRATION
  const [emailReg, setEmailReg] = useState("");
  const [phoneReg, setPhoneReg] = useState("");
  const [nameReg, setNameReg] = useState("");
  const [districtReg, setDistrictReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [user_type, setUserType] = useState("");

  const navigate = useNavigate();

  const handleSwitchForm = () => {
    setLogin(!login);
  };

  const HandleRegister = async (e) => {
    e.preventDefault();

    const URL = "http://3.27.218.228:9000/user/register";

    try {
      const response = await axios.post(URL, {
        email: emailReg,
        phone: phoneReg,
        name: nameReg,
        district: districtReg,
        password: passwordReg,
        user_type: user_type,
      });
      console.log(response);
      if (response.status === 200) {
        alert("USER SIGNUP SUCCESSFULLY");
        console.log("User created:", response.data);
        navigate("/account/activation");
      }
    } catch (error) {
      if (error.response.status === 400) {
        alert("Error creating user: Email already registered");
      }
      if (error.response.status === 500) {
        alert("Please use a correct phone number");
      } else {
        console.error("Error during signup", error);
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const BaseURL = "http://3.27.218.228:9000/user/login";

    try {
      const response = await axios.post(BaseURL, {
        email: email,
        password: password,
      });

      if (response.data) {
        const user_type = response.data.user.user_type;
        const name = response.data.user.name;
        const district = response.data.user.district;
        console.log(user_type);
        console.log(response.data);

        Cookies.set("loggedIn", "true");
        Cookies.set("email", email);
        Cookies.set("role", user_type);
        Cookies.set("username", name);
        Cookies.set("district", district);

        if (user_type === "admin") {
          alert("Login successful!");
          navigate("/admin/home");
          // console.log(Cookies.get("role"));
        } else {
          alert("User Login successful!");
          navigate("/home");
          console.log(Cookies.get("role"));
        }

        window.location.reload();
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      console.log(email);
      console.log(password);
      alert("Please check your credentials or verify your account");
    }
  };

  return (
    <div className="login-page flex ">
      <div
        className="login-picture w-3/5 bg-cover bg-center"
        style={{ backgroundImage: `url(${firebg})` }}
      >
        <div className="login-content flex justify-center items-center h-full">
          <div className="text-center py-20 bg-opacity-20 bg-white w-full ">
            <h2 className="text-white text-4xl">Your Safety, Our Priority</h2>
            <h1 className="class-h1 text-white uppercase my-2 text-5xl font-black">
              Welcome Back to FireSense
            </h1>
            <p className="text-white text-2xl">
              Real-time Fire Accident Advisory and Analysis Solutions System
            </p>
          </div>
        </div>
      </div>

      {login ? (
        <section className="login-form bg-gray-50 dark:bg-gray-900 w-2/5  ">
          <div className="login-form-container flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0">
            <div className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white h-24">
              <img className="w-64 h-48" src={logo} alt="logo" />
            </div>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className=" text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Please input a correct email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required=""
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          for="remember"
                          className="text-gray-500 dark:text-gray-300"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <a
                      href="forgot"
                      className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    onClick={handleLogin}
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Sign in
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?{" "}
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      onClick={handleSwitchForm}
                    >
                      Sign up
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="signup-form bg-gray-50 dark:bg-gray-900 w-2/5 ">
          <div className="signup-form-container flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white h-24">
              <img className="w-64 h-48" src={logo} alt="logo" />
            </div>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <a
                  className="text-xl font-large text-primary-600 hover:underline dark:text-primary-500 cursor-pointer"
                  onClick={handleSwitchForm}
                >
                  &lt; Back
                </a>
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign up An Account
                </h1>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    type="email"
                    onChange={(e) => {
                      setEmailReg(e.target.value);
                    }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Please input a correct email"
                    required=""
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Phone Number
                  </label>
                  <input
                    type="phone"
                    onChange={(e) => {
                      setPhoneReg(e.target.value);
                    }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Please use this format (+639564884840)"
                    required=""
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Full Name
                  </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setNameReg(e.target.value);
                    }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Please input your name"
                    required=""
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Choose Your District in Manila
                  </label>
                  <select
                    onChange={(e) => {
                      setDistrictReg(e.target.value);
                    }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  >
                    <option value="" disabled selected>
                      Select District
                    </option>
                    <option value="District 1">District 1</option>
                    <option value="District 2">District 2</option>
                    <option value="District 3">District 3</option>
                    <option value="District 4">District 4</option>
                    <option value="District 5">District 5</option>
                    <option value="District 6">District 6</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    What user are you?
                  </label>
                  <select
                    onChange={(e) => {
                      setUserType(e.target.value);
                    }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  >
                    <option value="" disabled selected>
                      Select Role
                    </option>
                    <option value="District 1">Resident</option>
                    <option value="District 2">Police</option>
                    <option value="District 3">Medical Personnel</option>
                    <option value="District 4">Firefighter</option>
                    <option value="District 5">Brgy. Heads</option>
                  </select>
                </div>

                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    onChange={(e) => {
                      setPasswordReg(e.target.value);
                    }}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <button
                  type="submit"
                  onClick={HandleRegister}
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default LoginPage;
