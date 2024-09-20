import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const PieChart = () => {
  const options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Service Provider across different Segments",
    },
    series: [
      {
        data: [
          { name: "Healthcare Sector", y: 20 },
          { name: "Construction Sector", y: 20 },
          { name: "Home Services Sector", y: 30 },
          { name: "Petcare Sector", y: 15 },
          { name: "Entertainment Sector", y: 15 },
        ],
        dataLabels: {
          enabled: false, // This hides the data labels
        },
      },
    ],
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="aspect-w-16 aspect-h-9">
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          containerProps={{ style: { width: '100%', height: '100%' } }}
        />
      </div>
    </div>
  );
};

export default PieChart;
