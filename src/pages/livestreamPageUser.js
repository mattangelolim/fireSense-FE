import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import axios from "axios";
import "../css/homepage.css";
import "../css/tips.css";
import "../css/livestream.css";
import leftarrow from "../assets/imgs/left-arrow.png";
import arrow from "../assets/imgs/right-arrow.png";
import Cookies from "js-cookie";

const LivestreamPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const commentsRef = useRef();
  const [lastLive, setLastLive] = useState("");

  useEffect(() => {
    axios
      .get("http://3.27.218.228:9000/api/show/live/last")
      .then((response) => {
        setLastLive(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching last live data:", error);
      });
  }, []);
  

  useEffect(() => {
    fetch("http://3.27.218.228:9000/api/live/comments")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.comments);
        setComments(data.comments);
      })
      .catch((error) => console.error("Error fetching comments:", error));
    commentsRef.current.scrollTop = commentsRef.current.scrollHeight;
  }, [comments]);
  const handleSendComment = async (e) => {
    e.preventDefault();

    const URL = "http://3.27.218.228:9000/api/comment";
    const username = Cookies.get("username");

    try {
      const response = await axios.post(URL, {
        username: username,
        comment: comment,
      });
      console.log(response);
      setComment("");
      // window.location.reload()
      if (response.status === 200) {
        // console.log("User commented:", response.data);
        // console.log("Current value of comment:", comment);


        // console.log(comment)
      
      }
    } catch (error) {
      console.error("Error when commenting", error);
    }
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log(isSidebarOpen);
  };
  return (
    <div>
      <div className="livestream flex bg-gray-200">
        <Sidebar className="left w-1/6" isSidebarOpen={isSidebarOpen} />
        <div className="right w-5/6">
          <Header />
          <div
            className={`hidden md:flex bg-gray-200 py-8 cursor-pointer absolute top-1/2 transform -translate-y-1/2 left-0 justify-center items-center hidden rounded-tr rounded-br ${
              isSidebarOpen ? "active" : ""
            }`}
          >
            <img
              className="h-4 w-4 object-contain"
              src={isSidebarOpen ? leftarrow : arrow}
              alt="#"
              onClick={handleSidebarToggle}
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="video border-solid border-2 border-orange-600">
            <iframe
                className="w-full h-full aspect-w-16 aspect-h-9"
                title="livestream"
                frameborder="0"
                allowfullscreen
                src="https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?group.id=d5cf9a19-7f17-4f9e-b50e-8a4a2faf1a07&options.adaption.rule=deviationOfMean2&startIndex=0&playback.latencyControlMode=classic"
              ></iframe>
            </div>
            <h3
              className="live-end bg-white p-2 border border-gray-300 rounded-sm mt-2"
              style={{ color: lastLive.endLive ? "red" : "orange" }}
            >
              {lastLive.endLive !== null
                ? `Last live ended today, at ${lastLive.endLive}`
                : `There's a new live started today at ${lastLive.startLive}`}
            </h3>
            <div className="container-comment w-full flex border-solid border-1 border-orange-600 p-2 justify-center items-center ">
              <div className="comments p-4 w-1/2 mb-2" ref={commentsRef}>
                <h2 className="mb-4 text-lg font-bold">Audience Comments:</h2>
                {comments.map((commentObject, index) => (
                  <div key={index} className="mb-2">
                    <strong>{commentObject.username}: </strong>
                    {commentObject.comment}
                  </div>
                ))}
                <div className="flex">
                  <input
                    onChange={(e) => {
                      setComment(e.target.value);
                    }}
                    value={comment}
                    className="w-full h-12 px-3 py-2 border rounded focus:outline-none focus:border-gray-500"
                    placeholder="Type your comment..."
                  />

                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleSendComment}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivestreamPage;
