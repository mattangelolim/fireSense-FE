import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const FireCasesGraph = () => {
  const [fireCasesData, setFireCasesData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedView, setSelectedView] = useState("district");

  const handleViewChange = (event) => {
    setSelectedView(event.target.value);
  };

  useEffect(() => {
    fetch("http://3.27.218.228:9000/all/fire/cases")
      .then((response) => response.json())
      .then((data) => {
        setFireCasesData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const uniqueMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const uniqueDistricts = Array.from(
    new Set(fireCasesData.map((entry) => entry.district))
  );
  const uniqueAreas = Array.from(
    new Set(fireCasesData.map((entry) => entry.area))
  );

  const years = Array.from(new Set(fireCasesData.map((entry) => entry.year)));

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const chartOptions = {
    xaxis: {
      categories: uniqueMonths,
    },
    yaxis: {
      title: {
        text: "Count",
      },
    },
  };

  const chartSeries = (
    selectedView === "district" ? uniqueDistricts : uniqueAreas
  ).map((item) => {
    const dataForItem = fireCasesData.filter(
      (entry) =>
        (selectedView === "district"
          ? entry.district === item
          : entry.area === item) &&
        (!selectedYear || entry.year === selectedYear)
    );
    return {
      name: `${selectedView === "district" ? "District" : ""} ${item}`,
      data: uniqueMonths.map((month) => {
        const entriesForMonth = dataForItem.filter(
          (entry) => entry.month === month
        );
        return entriesForMonth.reduce((sum, entry) => sum + entry.count, 0);
      }),
    };
  });

  return (
    <div>
      <div className="m-4 p-4 border-2 border-gray-400 bg-white w-fit rounded-md">
        <label htmlFor="yearFilter">Select Year: </label>
        <select
          className="border-2 mr-2"
          id="yearFilter"
          onChange={handleYearChange}
          value={selectedYear || ""}
        >
          <option value="">All</option>
          {years
            .slice()
            .sort((a, b) => a - b) // Sort in ascending order
            .map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
        </select>
        <label htmlFor="viewFilter">Select View By: </label>
        <select
          className="border-2"
          id="viewFilter"
          onChange={handleViewChange}
          value={selectedView}
        >
          <option value="district">District</option>
          <option value="area">Area</option>
        </select>
      </div>

      <div className="flex flex-row">
        <div className="my-4 mx-4 bg-white p-8 border-2 border-yellow-500 w-1/2">
          <h2>Fire Cases Graph In Manila</h2>
          <Chart
            options={chartOptions}
            series={chartSeries}
            type="line"
            height={350}
          />
        </div>
        <div className="my-4 mx-4 bg-white p-8 border-2 border-yellow-500 w-1/2">
          <h2>Fire Cases Heat Map</h2>
          <Chart
            options={chartOptions}
            series={chartSeries}
            type="heatmap"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default FireCasesGraph;
