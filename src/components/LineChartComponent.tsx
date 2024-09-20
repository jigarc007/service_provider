import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const LineChartComponent = () => {
  const options = {
    chart: {
      type: "line",
      backgroundColor: "#fff",
      borderRadius: 10,
    },
    title: {
      text: "",
    },
    xAxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      lineColor: "#ccc",
      tickColor: "#ccc",
    },
    yAxis: {
      title: {
        text: "",
      },
      gridLineColor: "#eee",
    },
    legend: {
      align: "center",
      verticalAlign: "bottom",
      layout: "horizontal",
      itemStyle: {
        color: "#333",
        fontWeight: "normal",
      },
    },
    series: [
      {
        name: "Active Service Provider",
        data: [4200, 3900, 4500, 4800, 5100, 4600, 5000],
        color: "#007aff",
      },
      {
        name: "Service Provider Retention Rate",
        data: [3400, 3300, 4000, 4100, 4500, 4400, 4600],
        color: "#ffdd00",
      },
      {
        name: "New Service Provider",
        data: [2200, 2000, 2500, 2300, 2800, 2700, 3000],
        color: "#00bfa5",
      },
      {
        name: "Service Completion Rate",
        data: [2400, 2600, 2900, 3000, 3300, 3500, 3600],
        color: "#ff0054",
      },
      {
        name: "Total Service Provider",
        data: [4500, 4300, 4800, 4700, 5200, 4900, 5300],
        color: "#d94eff",
      },
      {
        name: "Average Rating",
        data: [3900, 4100, 3800, 4000, 4200, 4300, 4400],
        color: "#ff6600",
      },
    ],
    plotOptions: {
      line: {
        marker: {
          enabled: true,
          symbol: "circle",
          radius: 4,
        },
      },
    },
    credits: {
      enabled: false,
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default LineChartComponent;
