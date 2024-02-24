import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from "react-apexcharts";

const MovingAverageGraphUser = () => {
  const [analysisByDistrict, setAnalysisByDistrict] = useState({});

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:9000/api/moving-average/text');
        setAnalysisByDistrict(response.data.analysisByDistrict);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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

  const renderEssay = (district, trendData) => {
    return (
      <div className="mb-4 p-4 bg-white shadow-md rounded-lg">
        <div key={district} className="flex flex-col md:flex-row md:space-x-4 w-full">
          <div>
            <h2 className="text-2xl font-bold mb-2">District {district} Analysis</h2>
            <p className="mb-4">
              Sa loob ng mga taon, ipinakita ng District {district} ang mga sumusunod na trend:
            </p>
            <ul>
              {Object.entries(trendData).map(([year, trend]) => (
                <li key={year}>{`${year}: ${trend}`}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="moving-average-page p-8 ">
      <h2 className="text-3xl font-bold mb-6">Moving Average Analysis by District</h2>

      <div className="flex flex-wrap border-2 border-red-700 p-4 bg-orange-800 shadow-lg">
      {Object.entries(analysisByDistrict).map(([district, trendData]) => (
        <div key={district} className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4 mb-4">
          {renderEssay(district, trendData)}
        </div>
      ))}
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
      <div className="mt-8 bg-white p-4 rounded-md">
        <p className="mb-4">
          Batay sa mga trend na ito, maaari nating mapansin na may mga pagbabago sa takbo ng kaso sa bawat taon. Narito ang ilang obserbasyon:
        </p>

        <p className="mb-4">
          Taong 2018, sa District 1, lumitaw na may paminsang pag-angat ng kaso ngunit ito ay bumaba noong mga sumunod na taon. Maaaring ito ay dahil sa mga hakbang na ipinatupad sa komunidad upang mapababa ang bilang ng mga kaso.
        </p>

        <p className="mb-4">
          Sa District 3, makikita natin na nanatili itong medyo stable mula 2017 hanggang 2020, ngunit biglang nagkaroon ng pagtaas noong 2021. Maaring may mga pangyayari o mga bagay sa komunidad na nakatulong sa pag-usbong ng kaso noong taon na iyon.
        </p>

        <p>
          Ang District 5 ay nakakita ng pagtaas noong 2018 at 2019, ngunit bumaba ito ng malaki noong 2020 at nanatili sa mababang antas hanggang 2024. Maaaring ito ay dahil sa mga mahigpit na patakaran ng kwarantina at iba pang hakbang na naitaguyod ng pamahalaan noong panahong iyon.
        </p>
      </div>
    </div>
  );
};

export default MovingAverageGraphUser;
