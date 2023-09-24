import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const FireCasesGraph = () => {
  const [fireCasesData, setFireCasesData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9000/all/fire/cases')
      .then(response => response.json())
      .then(data => {
        setFireCasesData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const uniqueMonths = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ];
  const uniqueDistricts = Array.from(new Set(fireCasesData.map(entry => entry.district)));

  const chartOptions = {
    xaxis: {
      categories: uniqueMonths,
    },
    yaxis: {
      title: {
        text: 'Count',
      },
    },
  };

  const chartSeries = uniqueDistricts.map(district => {
    const dataForDistrict = fireCasesData.filter(entry => entry.district === district);
    return {
      name: `District ${district}`,
      data: uniqueMonths.map(month => {
        const entriesForMonth = dataForDistrict.filter(entry => entry.month === month);
        return entriesForMonth.reduce((sum, entry) => sum + entry.count, 0);
      }),
    };
  });

  return (
    <div>
      <h2>Fire Cases Line Graph</h2>
      <Chart options={chartOptions} series={chartSeries} type="line" height={350} />
    </div>
  );
};

export default FireCasesGraph;