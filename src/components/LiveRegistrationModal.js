import React, { useState } from "react";
import axios from "axios";
import "../css/modal.css";

const LiveRegistrationModal = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [showStreamingKey, setShowStreamingKey] = useState(false);

  const toggleStreamingKey = () => {
    setShowStreamingKey(!showStreamingKey);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://3.27.218.228:9000/api/broadcast/live",
        {
          username,
          message,
        }
      );

      if (response.data.success) {
        alert("Broadcast created successfully");
        setUsername("");
        setMessage("");
        window.location.reload();

        // onClose();
      } else {
        alert("Error creating broadcast");
      }
    } catch (error) {
      console.error("Error creating broadcast:", error);
      alert("Internal server error");
    }
  };

  return (
    <div
      className={`modal fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      {/* <div className="fixed inset-0 bg-black opacity-50"></div> */}
      <div
        className="modal-container relative p-6 border border-gray-300 rounded-lg bg-white w-1/4"
        data-te-modal-body-ref
      >
        <button
          type="button"
          className="close absolute top-0 right-6 text-4xl mt-1"
          data-dismiss="modal"
          aria-label="Close"
          onClick={onClose}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div>
          <div className="my-4">
            <label for="recipient-name">Username:</label>
            <input
              type="text"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              className="relative m-0 -mr-0.5 block w-full flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              required
            />
          </div>
          <div className="mb-3">
            <label for="recipient-name">Message:</label>
            <textarea
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className="relative m-0 -mr-0.5 block w-full flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              required
            />
          </div>
          <div className="mb-3 cursor-pointer">
            <text>Streaming Key:<span onClick={toggleStreamingKey}> {showStreamingKey ? "S44ne-MQMZO" : "*******" }</span></text>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded border border-blue-600"
          onClick={handleSubmit}
        >
          Broadcast
        </button>
        <button
          type="button"
          className="btn btn-secondary bg-gray-400 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded border border-gray-500 mx-2"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LiveRegistrationModal;
