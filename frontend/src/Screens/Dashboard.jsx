import React from "react";
import axios from "axios";

import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import isLoggined from "../utils/isLoggined";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
);

const MetricCard = ({ title, value }) => (
  <div className="bg-gray-900 rounded-2xl shadow-md shadow-gray-600 p-6 w-full">
    <h2 className="text-xl font-semibold text-white">{title}</h2>
    <p className="text-3xl font-bold text-gray-100 mt-2">{value}</p>
  </div>
);

const Dashboard = () => {
  const lineData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Views",
        data: [120, 190, 300, 500, 200, 300, 400],
        borderColor: "#6366f1",
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const pieData = {
    labels: ["Nature", "Tech", "People", "Abstract"],
    datasets: [
      {
        data: [300, 150, 100, 75],
        backgroundColor: ["#fbbf24", "#3b82f6", "#10b981", "#f43f5e"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "#ffffff", // white legend text
        },
      },
      tooltip: {
        bodyColor: "#ffffff", // tooltip body text white
        titleColor: "#ffffff", // tooltip title text white
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#ffffff", // white X-axis text
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // optional faint grid
        },
      },
      y: {
        ticks: {
          color: "#ffffff", // white Y-axis text
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // optional faint grid
        },
      },
    },
  };

  const [totalImage, setTotalImage] = useState(0)
  useEffect(()=>{
    const totalImage = async () => {
      const data = await axios.get("http://localhost:3001/api/dashboard/totalimage");
       console.log(data.data.totalImage)
       setTotalImage(data.data.totalImage)
    }

    totalImage()
  }, [])

  const dashData = (
    <div className="min-h-screen bg-base-100 p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 white md:text-start text-center">
        📊 Your Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <MetricCard title="Total Images" value={totalImage} />
        <MetricCard title="API calls" value="9804" />
        <MetricCard title="Downloads" value="987" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-900 rounded-2xl shadow-md shadow-gray-600 md:p-6 p-3">
          <h2 className="text-lg font-semibold mb-4 text-gray-100">
            Weekly Views
          </h2>
          <Line data={lineData} options={options} />
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl shadow-md shadow-gray-600">
          <h2 className="text-lg font-semibold mb-4 text-gray-100">
            Top Categories
          </h2>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );

  return isLoggined() ? (
    dashData
  ) : (
    <>
      <div className="relative min-h-screen overflow-hidden">
        {/* Background blurred dashData */}
        <div className="absolute inset-0 z-10 blur-sm">
          {dashData}
        </div>

        {/* Centered LOGIN button */}
        <div className="flex justify-center items-center h-screen z-10">
          <Link to='/login' className="z-20 px-6 py-2 font-semibold bg-blue-700 text-white rounded-sm hover:bg-pink-600 transition-transform hover:scale-105">
            LOGIN
          </Link>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
