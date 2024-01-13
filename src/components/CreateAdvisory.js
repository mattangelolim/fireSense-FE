import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/advisory.css";

const fireAwarenessOptions = {
  'FIRE OUT': 'Ang sunog ay napuksa na. Wala nang nag-aapoy.',
  'UNDER CONTROL': 'Ang sunog ay nasa ilalim ng kontrol. Hindi na ito nagdudulot ng malaking panganib.',
  'GENERAL ALARM': 'Malawakang sunog na apektado ang malaking bahagi ng lugar. 80 Fire Trucks ang mobilisado.',
  'TASK FORCE DELTA': 'Malaking bahagi ng lugar ang apektado. 36 Fire Trucks ang inilabas para sa agarang pagtugon.',
  'TASK FORCE CHARLIE': 'Malaking bahagi ng lugar ang apektado. 32 Fire Trucks ang inilabas para sa agarang pagtugon.',
  'TASK FORCE BRAVO': '15 X 15 na mga Bahay ang apektado. 28 Fire Trucks ang inilabas para sa agarang pagtugon.',
  'TASK FORCE ALPHA': '12 X 12 na mga Bahay ang apektado. 24 Fire Trucks ang inilabas para sa agarang pagtugon.',
  'FIFTH ALARM': '10-11 na mga Bahay o Mataas na Gusali ang apektado. 20 Fire Trucks ang inilabas para sa agarang pagtugon.',
  'FOURTH ALARM': '8-9 na mga Bahay o Mataas na Gusali ang apektado. 16 Fire Trucks ang inilabas para sa agarang pagtugon.',
  'THIRD ALARM': '6-7 na mga Bahay o Mataas na Gusali ang apektado. 12 Fire Trucks ang inilabas para sa agarang pagtugon.',
  'SECOND ALARM': '4-5 na mga Bahay ang apektado. 8 Fire Trucks ang inilabas para sa agarang pagtugon.',
  'FIRST ALARM': '2-3 na mga Bahay ang apektado. 4 Fire Trucks ang inilabas para sa agarang pagtugon.'
};

const CreateAdvisory = () => {
  const [announcement, setAnnouncement] = useState(fireAwarenessOptions['FIRST ALARM']);
  const [expirationHours, setExpirationHours] = useState(0);
  const [expirationMinutes, setExpirationMinutes] = useState(0);
  const [expirationSeconds, setExpirationSeconds] = useState(0);
  const [district, setSelectedDistrict] = useState("Disctrict 1");
  const [area, setArea] = useState("")
  const [alert, setAlert] = useState("Alert 1")

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  const handleAnnouncementChange = (e) => {
    setAnnouncement(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request using Axios
      const response = await axios.post("http://3.27.218.228:9000/admin/advisory", {
        announcement,
        expirationHours,
        expirationMinutes,
        expirationSeconds,
        district: district,
        areas: area,
        alert: alert
      });

      window.alert("ADVISORY CREATED SUCCESSFULLY");
      window.location.reload();
      console.log("Advisory created:", response.data);
    } catch (error) {
      console.error("Error creating advisory:", error);
    }

    setAnnouncement("");
    setExpirationHours(0);
    setExpirationMinutes(0);
    setExpirationSeconds(0);
    setSelectedDistrict("District 1");
  };



  const handleAlertChange = (e) => {
    const selectedAlert = e.target.value;
    setAlert(selectedAlert);
    setAnnouncement(fireAwarenessOptions[selectedAlert]);
  };


  return (
    <div className="advisory mx-10 py-10 px-10 bg-white h-1/3 w-2/3">
      {" "}
      {/* Adjust margin as needed */}
      <h2 className="text-2xl font-bold mb-2">
        Create an Advisory/Announcement
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div className="flex flex-row">

          <div className="flex flex-col space-y-2 w-full">
            <div className="flex flex-col space-y-2 mb-4">
              <label className="font-bold">Select Alert:</label>
              <select
                id="alert"
                value={alert}
                onChange={handleAlertChange}
                className="border border-gray-300 px-2 py-1 rounded w-64 text-lg"
                required
              >
                <option value="FIRST ALARM">First Alarm</option>
                <option value="SECOND ALARM">Second Alarm</option>
                <option value="THIRD ALARM">Third Alarm</option>
                <option value="FOURTH ALARM">Fourth Alarm</option>
                <option value="FIFTH ALARM">Fifth Alarm</option>
                <option value="TASK FORCE ALPHA">TASK FORCE ALPHA</option>
                <option value="TASK FORCE BRAVO">TASK FORCE BRAVO</option>
                <option value="TASK FORCE CHARLIE">TASK FORCE CHARLIE </option>
                <option value="TASK FORCE DELTA">TASK FORCE DELTA </option>
                <option value="GENERAL ALARM">GENERAL ALARM</option>
                <option value="UNDER CONTROL">UNDER CONTROL</option>
                <option value="FIRE OUT">FIRE OUT</option>

              </select>
            </div>
            <label className="font-bold">Announcement:</label>
            <textarea
              type="text"
              value={announcement}
              onChange={handleAnnouncementChange}
              className="border border-gray-300 px-2 py-1 rounded h-24 text-lg"
              required
            />
            {/* <select
              // value={selectedOption}
              onChange={handleSelectChange}
              className="border border-gray-300 px-2 py-1 rounded"
            >
              <option value="" disabled>Select an option</option>
              {fireAwarenessOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select> */}
          </div>

          <div className="w-auto ml-10">
            <div className="flex flex-col space-y-2 mb-4">
              <label className="font-bold">Expiration Hours:</label>
              <div className="flex space-x-2">
                <select
                  value={expirationHours}
                  onChange={(e) => {
                    setExpirationHours(e.target.value);
                  }}
                  className="border border-gray-300 px-2 py-1 rounded w-16 text-lg"
                  required
                >
                  {Array.from({ length: 24 }).map((_, i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
                <span className="font-bold">:</span>
                <select
                  value={expirationMinutes}
                  onChange={(e) => {
                    setExpirationMinutes(e.target.value);
                  }}
                  className="border border-gray-300 px-2 py-1 rounded w-16 text-lg"
                  required
                >
                  {Array.from({ length: 60 }).map((_, i) => (
                    <option key={i} value={i}>
                      {i < 10 ? `0${i}` : i}
                    </option>
                  ))}
                </select>
                <span className="font-bold">:</span>
                <select
                  value={expirationSeconds}
                  onChange={(e) => {
                    setExpirationSeconds(e.target.value);
                  }}
                  className="border border-gray-300 px-2 py-1 rounded w-16 text-lg"
                  required
                >
                  {Array.from({ length: 60 }).map((_, i) => (
                    <option key={i} value={i}>
                      {i < 10 ? `0${i}` : i}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col space-y-2 mb-4">
              <label className="font-bold">Select District:</label>
              <select
                id="district"
                value={district}
                onChange={handleDistrictChange}
                className="border border-gray-300 px-2 py-1 rounded w-64 text-lg"
                required
              >
                <option value="District 1">District 1</option>
                <option value="District 2">District 2</option>
                <option value="District 3">District 3</option>
                <option value="District 4">District 4</option>
                <option value="District 5">District 5</option>
                <option value="District 6">District 6</option>
              </select>
            </div>
            {district === 'District 1' && (
              <div className="flex flex-col gap-1 font-tbc font-medium text-title13">
                <label htmlFor="area" className="font-bold">District 1 Area:</label>
                <select
                  onChange={(e) => setArea(e.target.value)}
                  value={area}
                  className="border rounded-lg p-1 text-title13 texttransition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-neutral-200 dark:focus:border-primary"
                  required
                >
                  <option value="" disabled>Select an area</option>
                  <option value="Tondo I (West)">Tondo I (West)</option>
                  \
                </select>
              </div>
            )}

            {district === 'District 2' && (
              <div className="flex flex-col gap-1 font-tbc font-medium text-title13">
                <label htmlFor="area" className="font-bold">District 2 Area:</label>
                <select
                  onChange={(e) => setArea(e.target.value)}
                  value={area}
                  className="border rounded-lg p-1 text-title13 texttransition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-neutral-200 dark:focus:border-primary"
                  required
                >
                  <option value="" disabled>Select an area</option>
                  <option value="Tondo I (West)">Tondo II (East)</option>
                  \
                </select>
              </div>
            )}
            {district === 'District 3' && (
              <div className="flex flex-col gap-1 font-tbc font-medium text-title13">
                <label htmlFor="area" className="font-bold">District 3 Area:</label>
                <select
                  onChange={(e) => setArea(e.target.value)}
                  value={area}
                  className="border rounded-lg p-1 text-title13 texttransition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-neutral-200 dark:focus:border-primary"
                  required
                >
                  <option value="" disabled>Select an area</option>
                  <option value="Binondo">Binondo</option>
                  <option value="San Nicolas">San Nicolas</option>
                  <option value="Santa Cruz">Santa Cruz</option>
                </select>
              </div>
            )}
            {district === 'District 4' && (
              <div className="flex flex-col gap-1 font-tbc font-medium text-title13">
                <label htmlFor="area" className="font-bold">District 4 Area:</label>
                <select
                  onChange={(e) => setArea(e.target.value)}
                  value={area}
                  className="border rounded-lg p-1 text-title13 texttransition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-neutral-200 dark:focus:border-primary"
                  required
                >
                  <option value="" disabled>Select an area</option>
                  <option value="Sampaloc">Sampaloc</option>

                </select>
              </div>
            )}
            {district === 'District 5' && (
              <div className="flex flex-col gap-1 font-tbc font-medium text-title13">
                <label htmlFor="area" className="font-bold">District 5 Area:</label>
                <select
                  onChange={(e) => setArea(e.target.value)}
                  value={area}
                  className="border rounded-lg p-1 text-title13 texttransition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-neutral-200 dark:focus:border-primary"
                  required
                >
                  <option value="" disabled>Select an area</option>
                  <option value="Ermita">Ermita</option>
                  <option value="Intramuros">Intramuros</option>
                  <option value="Malate">Malate</option>
                  <option value="Paco">Paco</option>
                  <option value="Port Area">Port Area</option>
                  <option value="San Andres Bukid">San Andres Bukid</option>
                </select>
              </div>
            )}
            {district === 'District 6' && (
              <div className="flex flex-col gap-1 font-tbc font-medium text-title13">
                <label htmlFor="area" className="font-bold">District 6 Area:</label>
                <select
                  onChange={(e) => setArea(e.target.value)}
                  value={area}
                  className="border rounded-lg p-1 text-title13 texttransition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-neutral-200 dark:focus:border-primary"
                  required
                >
                  <option value="" disabled>Select an area</option>
                  <option value="Pandacan">Pandacan</option>
                  <option value="San Miguel">San Miguel</option>
                  <option value="Sta Ana">Santa Ana</option>
                  <option value="Paco">Paco</option>
                  <option value="Santa Mesa">Santa Mesa</option>

                </select>
              </div>
            )}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
            >
              Create Advisory
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateAdvisory;
