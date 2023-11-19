import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "react-apexcharts";
import "../css/blink.css";

const MovingAverageGraph = () => {
  const [movingAverage, setMovingAverage] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [average, setAverage] = useState(0);
  const [status, setStatus] = useState("Stable trend");
  const [year, setYear] = useState(2023);
  const [district, setDistrict] = useState(1);


  const handleYearChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= 2017) {
      setYear(value);
    }
  };

  const handleDistrictChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= 1 && value <= 6) {
      setDistrict(value);
    }
  };

  useEffect(() => {
    // Make a request to the API endpoint
    axios.get('http://localhost:9000/api/moving-average/prediction')
      .then(response => {
        // Assuming the response data is an array
        setChartData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get("http://3.27.218.228:9000/api/moving-average", {
          params: {
            year: year,
            district: district,
          },
        })
        .then((response) => {
          setMovingAverage(response.data.movingAverages);
          console.log(response.data.movingAverages.slice(-3))
          setAverage(response.data.movingAverages.slice(-3).reduce((acc, currentValue) => acc + currentValue, 0) / 3);

        })
        .catch((error) => console.error("Error fetching data:", error));
    }, 1000);

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [year, district]);

  const chartOptions = {
    xaxis: {
      title: {
        text: "Timeframe",
      },
    },
    yaxis: {
      title: {
        text: "Cases",
      },
      min: 0,
      max: 30,
    },
  };

  const chartSeries = [
    {
      name: "Moving Averages",
      data: movingAverage,
    },
  ];

  const chartSeries2 = [
    {
      name: "Moving Averages",
      data: chartData,
    },
  ];

  const chartOptions2 = {
    chart: {
      type: 'line',
    },
    series: [
      {
        name: 'Data',
        data: chartData,
      },
    ],
    xaxis: {
      categories: Array.from({ length: chartData.length }, (_, i) => (2017 + i).toString()), // Assuming the data starts from 2017
    },
  };

  return (
    <div>
      <div className="flex m-4 ">
        <div
          className={`warnings flex flex-col items-center border-2 border-green-500 ${average < 10 ? "animate-blink" : ""
            }`}
        >
          <h1 className="text-green-500 text-2xl">Green Warning</h1>
          <p className="text-justify">Low fire risk, few cases detected.</p>
        </div>

        <div
          className={`warnings flex flex-col items-center border-2 border-yellow-500 ${average >= 10 && average < 15 ? "animate-blink" : ""
            }`}
        >
          <h1 className="text-yellow-500 text-2xl">Yellow Warning</h1>
          <p>Moderate risk, 10 & above cases!</p>
        </div>

        <div
          className={`warnings flex flex-col items-center border-2 border-orange-500 ${average >= 15 && average < 30 ? "animate-blink" : ""
            }`}
        >
          <h1 className="text-orange-500 text-2xl">Orange Warning</h1>
          <p>Significant risk, 15 & above cases!</p>
        </div>

        <div
          className={`warnings flex flex-col items-center border-2 border-red-500 ${average >= 30 ? "animate-blink" : ""
            }`}
        >
          <h1 className="text-2xl">Red Warning</h1>
          <p>Critical situation, high cases !.</p>
        </div>
      </div>
      <div className="flex">

        <div className="flex flex-col justify-center items-center w-[48%] m-4 bg-white p-8 border-2 border-yellow-500 mx-auto my-4">
          <h2 className="text-xl font-bold mb-4">
            Moving Average Graph of Fire Cases
          </h2>
          <div className="flex">
            <div className="mb-4">
              <label className="font-bold mb-2 mr-4">Year:</label>
              <input
                type="number"
                value={year}
                onChange={handleYearChange}
                min="2017"
                className="border border-gray-300 rounded px-3 py-2 w-20 mr-8"
              />
            </div>
            <div className="mb-4">
              <label className="font-bold mb-2 mr-4">District:</label>
              <input
                type="number"
                value={district}
                onChange={handleDistrictChange}
                min="1"
                max="6"
                className="border border-gray-300 rounded px-3 py-2 w-20"
              />
            </div>
          </div>

          <Chart
            options={chartOptions}
            series={chartSeries}
            type="area"
            height={350}
            className="w-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-[48%] m-4 bg-white p-8 border-2 border-yellow-500 mx-auto my-4">
          <h2 className="text-xl font-bold mb-4">
            Predicted Value of Fire Cases Next Year
          </h2>

          <Chart
            options={chartOptions2}
            series={chartSeries2}
            type="area"
            height={350}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default MovingAverageGraph;
