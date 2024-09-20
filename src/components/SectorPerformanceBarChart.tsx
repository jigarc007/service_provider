import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const SectorPerformanceBarChart: React.FC = () => {
  const options: Highcharts.Options = {
    chart: {
      type: "column",
      backgroundColor: "transparent",
    },
    title: {
      text: "",
    },
    xAxis: {
      categories: [
        "Active Service Provider",
        "Service Completion Rate",
        "Service Provider Retention Rate",
        "Total Service Provider",
        "New Service Provider",
        "Average Rating",
      ],
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
    yAxis: {
      title: {
        text: null,
      },
      labels: {
        enabled: false,
      },
      gridLineWidth: 0,
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      column: {
        borderRadius: 5,
      },
    },
    series: [
      {
        type: "column",
        data: [
          { y: 30, color: "#4A90E2" },
          { y: 80, color: "#FF6B6B" },
          { y: 60, color: "#50E3C2" },
          { y: 70, color: "#F7A4D9" },
          { y: 20, color: "#FFD572" },
          { y: 50, color: "#8E44AD" },
        ],
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return (
    <div className="bg-white rounded-lg p-[20px]">
      <h2 className="flex text-[#0D0D0D] text-[20px] font-bold">
        Sector Performance
      </h2>
      <HighchartsReact highcharts={Highcharts} options={options} />
      <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#4A90E2] mr-2"></div>
          <span className="text-[#808080] text-[14px] font-medium">
            Active Service Provider
          </span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#FF6B6B] mr-2"></div>
          <span className="text-[#808080] text-[14px] font-medium">
            Service Completion Rate
          </span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#50E3C2] mr-2"></div>
          <span className="text-[#808080] text-[14px] font-medium">
            Service Provider Retention Rate
          </span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#F7A4D9] mr-2"></div>
          <span className="text-[#808080] text-[14px] font-medium">
            Total Service Provider
          </span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#FFD572] mr-2"></div>
          <span className="text-[#808080] text-[14px] font-medium">
            New Service Provider
          </span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#8E44AD] mr-2"></div>
          <span className="text-[#808080] text-[14px] font-medium">
            Average Rating
          </span>
        </div>
      </div>
    </div>
  );
};

export default SectorPerformanceBarChart;
