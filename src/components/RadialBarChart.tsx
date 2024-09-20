import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMore from "highcharts/highcharts-more";
import SolidGauge from "highcharts/modules/solid-gauge";

// Initialize the SolidGauge module for Highcharts
highchartsMore(Highcharts);
SolidGauge(Highcharts);

const RadialBarChart = () => {
  const options = {
    chart: {
      type: "solidgauge",
      height: "500px  ",
      Width: "400px",
    },
    title: {
      text: "Performance Metrics & Feedback",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
      align: "center",
    },
    pane: {
      startAngle: 0,
      endAngle: 180,
      background: [
        {
          // Background for Performance Metrics
          outerRadius: "112%",
          innerRadius: "88%",
          backgroundColor: Highcharts.color("#6cd870").setOpacity(0.3).get(),
          borderWidth: 0,
        },
        {
          // Background for Feedback Summary
          outerRadius: "87%",
          innerRadius: "63%",
          backgroundColor: Highcharts.color("#f3af3e").setOpacity(0.3).get(),
          borderWidth: 0,
        },
        {
          // Background for Rating Trends
          outerRadius: "62%",
          innerRadius: "38%",
          backgroundColor: Highcharts.color("#f0e04d").setOpacity(0.3).get(),
          borderWidth: 0,
        },
      ],
    },
    yAxis: {
      min: 0,
      max: 100,
      stops: [
        [0.1, "#6cd870"], // green for Performance Metrics
        [0.5, "#f3af3e"], // orange for Feedback Summary
        [0.9, "#f0e04d"], // yellow for Rating Trends
      ],
      lineWidth: 0,
      tickPositions: [],
      showLastLabel: true,
      gridLineWidth: 0,
    },
    plotOptions: {
      solidgauge: {
        dataLabels: {
          enabled: false,
        },
        linecap: "round",
        stickyTracking: false,
      },
    },
    series: [
      {
        name: "Performance Metrics",
        data: [
          {
            color: "#6cd870",
            radius: "112%",
            innerRadius: "88%",
            y: 70,
          },
        ],
      },
      {
        name: "Feedback Summary",
        data: [
          {
            color: "#f3af3e",
            radius: "87%",
            innerRadius: "63%",
            y: 88,
          },
        ],
      },
      {
        name: "Rating Trends",
        data: [
          {
            color: "#f0e04d",
            radius: "62%",
            innerRadius: "38%",
            y: 59,
          },
        ],
      },
    ],
  };

  return (
    <div className="p-5 bg-white rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
      <div className="mt-4 text-left">
        <ul>
          <li className="flex items-center">
            <span
              className="w-3 h-3 mr-2 rounded-full"
              style={{ backgroundColor: "#6cd870" }}
            ></span>
            <span>Performance Metrics</span>
            <span className="ml-auto">6,38,465.14</span>
          </li>
          <li className="flex items-center mt-2">
            <span
              className="w-3 h-3 mr-2 rounded-full"
              style={{ backgroundColor: "#f3af3e" }}
            ></span>
            <span>Feedback Summary</span>
            <span className="ml-auto">41,881.2</span>
          </li>
          <li className="flex items-center mt-2">
            <span
              className="w-3 h-3 mr-2 rounded-full"
              style={{ backgroundColor: "#f0e04d" }}
            ></span>
            <span>Rating Trends</span>
            <span className="ml-auto">4,070,940.6</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RadialBarChart;
