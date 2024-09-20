import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ServiceOfferingChart: React.FC = () => {
  // Donut chart options
  const donutOptions = {
    chart: {
      type: "pie",
      height: "100%",
    },
    title: {
      text: "",
      align: "left",
      style: {
        fontWeight: "bold",
      },
    },
    plotOptions: {
      pie: {
        innerSize: "50%",
        dataLabels: {
          enabled: false,
        },
      },
    },
    series: [
      {
        name: "Services",
        data: [
          { name: "Active", y: 60, color: "#4caf50" },
          { name: "New", y: 20, color: "#ffeb3b" },
          { name: "Removed", y: 20, color: "#f44336" },
        ],
      },
    ],
  };

  // Line chart options
  const lineOptions = {
    chart: {
      type: "spline",
      height: "50%",
    },
    title: {
      text: "",
    },
    xAxis: {
      categories: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
      ],
    },
    yAxis: {
      title: {
        text: "",
      },
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        name: "Number of active services",
        data: [20, 21, 20, 19, 30, 18, 20, 40, 35, 50, 80, 100],
        color: "#4caf50",
      },
      {
        name: "New services added",
        data: [10, 11, 5, 2, 70, 40, 50, 80, 60, 70, 80, 90],
        color: "#ffeb3b",
      },
    ],
  };

  return (
    <div className="flex flex-col">
      <h2 className="flex text-[20px] font-bold text-[#0D0D0D]">
        Service Offerings
      </h2>
      <div className="flex gap-[20px] rounded-lg w-[100%]">
        <div className="mb-8 w-[30%]">
          <HighchartsReact highcharts={Highcharts} options={donutOptions} />
        </div>
        <div className="w-[70%]">
          <HighchartsReact highcharts={Highcharts} options={lineOptions} />
        </div>
      </div>
      <div className="flex justify-start mt-4">
        <div className="flex items-center mr-4">
          <div className="w-3 h-3 bg-[#4caf50] rounded-full mr-2"></div>
          <span className="text-sm">Number of active services</span>
        </div>
        <div className="flex items-center mr-4">
          <div className="w-3 h-3 bg-[#ffeb3b] rounded-full mr-2"></div>
          <span className="text-sm">New services added</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-[#f44336] rounded-full mr-2"></div>
          <span className="text-sm">Services removed</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceOfferingChart;
