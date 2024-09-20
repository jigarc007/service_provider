import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Donut chart options (Leads per stage)
const pieOptions = {
  chart: {
    type: "pie",
    backgroundColor: "transparent",
  },
  title: {
    text: "",
  },
  plotOptions: {
    pie: {
      innerSize: "60%", // Donut effect
      dataLabels: {
        enabled: true,
        format: "{point.percentage:.0f}%", // Percentage only
        distance: -30, // Position inside the slices
        style: {
          fontWeight: "bold",
          color: "white",
        },
      },
    },
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
  },
  series: [
    {
      name: "Leads",
      data: [
        { name: "Petcare Sector", y: 30, color: "#F87171" }, // Light pink
        { name: "Entertainment Sector", y: 15, color: "#6D28D9" }, // Purple
        { name: "Event Sector", y: 15, color: "#F59E0B" }, // Yellow
        { name: "Healthcare Sector", y: 20, color: "#34D399" }, // Teal
        { name: "Construction Sector", y: 20, color: "#3B82F6" }, // Blue
        { name: "Home Services Sector", y: 5, color: "#FDE68A" }, // Light yellow
      ],
    },
  ],
};

// Horizontal bar chart (Leads over the week)
const barOptions = {
  chart: {
    type: "bar",
    backgroundColor: "transparent",
  },
  title: {
    text: "",
  },
  xAxis: {
    categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    title: {
      text: null,
    },
  },
  yAxis: {
    min: 0,
    max: 1000,
    title: {
      text: "Leads",
      align: "high",
    },
    labels: {
      overflow: "justify",
    },
    gridLineWidth: 0, // Remove grid lines
  },
  tooltip: {
    valueSuffix: " leads",
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: false,
      },
      borderRadius: 5, // Rounded corners for bars
      pointPadding: 0.15, // Spacing between bars
      groupPadding: 0.1, // Spacing between categories
    },
    series: {
      stacking: "normal", // Stack bars for each category
    },
  },
  legend: {
    reversed: true,
    align: "center",
    verticalAlign: "bottom",
  },
  series: [
    {
      name: "Petcare Sector",
      data: [1000, 900, 850, 700, 650, 600, 950],
      color: "#F87171", // Light pink
    },
    {
      name: "Entertainment Sector",
      data: [750, 650, 600, 700, 500, 400, 600],
      color: "#6D28D9", // Purple
    },
    {
      name: "Event Sector",
      data: [300, 250, 200, 100, 350, 250, 100],
      color: "#F59E0B", // Yellow
    },
    {
      name: "Healthcare Sector",
      data: [200, 150, 300, 250, 300, 250, 150],
      color: "#34D399", // Teal
    },
    {
      name: "Construction Sector",
      data: [450, 400, 350, 500, 650, 600, 500],
      color: "#3B82F6", // Blue
    },
    {
      name: "Home Services Sector",
      data: [100, 50, 100, 150, 200, 100, 50],
      color: "#FDE68A", // Light yellow
    },
  ],
};

const ServiceProviderReportChart = () => {
  return (
    <div className="flex flex-col items-center space-y-6 p-6 bg-gray-50">
      {/* Donut Chart */}
      <div className="w-full max-w-sm">
        <HighchartsReact highcharts={Highcharts} options={pieOptions} />
      </div>

      {/* Horizontal Bar Chart */}
      <div className="w-full max-w-3xl">
        <HighchartsReact highcharts={Highcharts} options={barOptions} />
      </div>
    </div>
  );
};

export default ServiceProviderReportChart;
