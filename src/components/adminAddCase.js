import React, { useState } from "react";
import axios from "axios";
import "../css/modal.css";
// import { toast } from 'react-toastify';

const AddCaseModal = ({ isOpen, onClose }) => {
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");
    const [district, setDistrict] = useState("");
    const [area, setArea] = useState("");
    const [count, setCount] = useState(0);


    const handleAddCase = async () => {
        try {
            const response = await axios.post('http://3.27.218.228:9000/api/report/case', {
                year: year,
                month: month,
                district: district,
                area: area,
                count: count
            });

            console.log(response.status)

            if (response.status === 200){
                window.alert("Successfully added a case")
                onClose()
            }

        } catch (error) {
            console.error('Error adding:', error);
            window.alert("error occured while adding cases")
        }
    };


    return (
        <div
            className={`modal fixed  flex items-center justify-center ${isOpen ? "block" : "hidden"
                }`}
        >
            {/* <div className="fixed inset-0 bg-black opacity-50"></div> */}
            <div
                className="modal-container relative border border-gray-300 rounded-lg bg-white w-1/4"
                data-te-modal-body-ref
            >
                <div className="w-full h-fit p-5 bg-primary200 rounded-t-lg">
                    <h1 className="font-heading font-semibold text-heading25 text-red-800 text-center">Report a case!</h1>
                </div>

                <div className="flex flex-col gap-5 p-5">
                    <div className="flex flex-col gap-1 font-tbc font-medium text-title13">
                        <label for="dish">Year:</label>
                        <input
                            type="text"
                            onChange={(e) => {
                                setYear(e.target.value);
                            }}
                            className="border rounded-lg p-1 texttransition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-neutral-200 dark:focus:border-primary"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2 font-tbc font-medium text-title13">
                        <label htmlFor="month">Month:</label>
                        <select
                            onChange={(e) => {
                                setMonth(e.target.value);
                            }}
                            value={month}
                            className="border rounded-lg p-2 text-title13 texttransition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-neutral-200 dark:focus:border-primary"
                            required
                        >
                            <option value="" disabled>Select a month</option>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1 font-tbc font-medium text-title13">
                        <label htmlFor="district">District:</label>
                        <select
                            onChange={(e) => {
                                setDistrict(e.target.value);
                            }}
                            value={district}
                            className="border rounded-lg p-2 text-title13 texttransition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-neutral-200 dark:focus:border-primary"
                            required
                        >
                            <option value="" disabled>Select a district</option>
                            <option value="1">District 1</option>
                            <option value="2">District 2</option>
                            <option value="3">District 3</option>
                            <option value="4">District 4</option>
                            <option value="5">District 5</option>
                            <option value="6">District 6</option>
                        </select>
                    </div>

                    {district === '1' && (
                        <div className="flex flex-col gap-1 font-tbc font-medium text-title13">
                            <label htmlFor="area">District 1 Area:</label>
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

                    {district === '2' && (
                        <div className="flex flex-col gap-1 font-tbc font-medium text-title13">
                            <label htmlFor="area">District 2 Area:</label>
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
                    {district === '3' && (
                        <div className="flex flex-col gap-1 font-tbc font-medium text-title13">
                            <label htmlFor="area">District 3 Area:</label>
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
                    {district === '4' && (
                        <div className="flex flex-col gap-1 font-tbc font-medium text-title13">
                            <label htmlFor="area">District 4 Area:</label>
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
                    {district === '5' && (
                        <div className="flex flex-col gap-1 font-tbc font-medium text-title13">
                            <label htmlFor="area">District 5 Area:</label>
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
                    {district === '6' && (
                        <div className="flex flex-col gap-1 font-tbc font-medium text-title13">
                            <label htmlFor="area">District 6 Area:</label>
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
                    <div className="flex flex-col gap-1 font-tbc font-medium text-title13">
                        <label for="count">Count:</label>
                        <input
                            type="number"
                            onChange={(e) => {
                                setCount(e.target.value);
                            }}
                            className="border rounded-lg p-1 text-title13 texttransition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-neutral-200 dark:focus:border-primary"
                            required
                        />
                    </div>
                </div>

                {/** Register and Cancel Button */}
                <div className="flex justify-between p-5 w-full h-fit font-tbc">
                    <button
                        type="submit"
                        className="h-fit w-fit bg-orange-900 text-white border hover:bg-secondary500 text-secondary500 font-semibold px-5 py-3 rounded-xl"
                        onClick={handleAddCase}
                    >
                        Save Fire Case
                    </button>
                    <button
                        type="button"
                        className="flex h-fit w-fit text-primary500 bg-white hover:text-white hover:bg-primary500 font-semibold px-5 py-3 rounded-xl border "
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddCaseModal;