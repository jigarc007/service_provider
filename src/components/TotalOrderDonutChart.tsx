import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface DonutChartProps {
  totalOrders: number;
  activeOrders: number;
  completedOrders: number;
}

const TotalOrderDonutChart: React.FC<DonutChartProps> = ({
  totalOrders,
  activeOrders,
  completedOrders,
}) => {
  const options = {
    chart: {
      type: "pie",
      height: 300,
    },
    title: {
      text: "Total Orders",
      verticalAlign: "middle",
      style: {
        fontSize: "24px",
        fontWeight: "bold",
      },
    },
    subtitle: {
      text: "XX,XXX",
      verticalAlign: "middle",
      y: 40,
      floating: true,
    },
    plotOptions: {
      pie: {
        innerSize: "80%", // Creates the donut effect
        borderColor: null, // Removes border lines
        slicedOffset: 0, // Ensures the segments are aligned
        borderRadius: 8,
        dataLabels: {
          enabled: false,
        },
        states: {
          hover: {
            enabled: false,
          },
        },
      },
    },
    series: [
      {
        name: "Orders",
        data: [
          {
            name: "Completed Orders",
            y: completedOrders, // percentage for completed orders
            color: "#fbbf24", // yellow color (use hex code or tailwind color)
          },
          {
            name: "Active Orders",
            y: activeOrders, // percentage for active orders
            color: "#6366f1", // blue color (use hex code or tailwind color)
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-white rounded-lg p-[20px]">
      <h2 className="flex text-[#0D0D0D] text-[20px] font-bold">
        Total Orders
      </h2>
      <HighchartsReact highcharts={Highcharts} options={options} />
      <div className="mt-4 flex-col justify-center items-center text-sm">
        <div className="flex  flex-col items-center justify-start pb-[15px]">
          <div className="flex items-center">
            <span className="w-[20px] h-[5px] rounded-full bg-[#6366F1] mr-2" />
            <span className="text-[#615E83] text-[12px]">Active Orders</span>
          </div>
          <span className="ml-2 text-[16px] font-bold text-[#1E1B39] pt-[10px]">
            X,XXX,XXX
          </span>
        </div>
        <div className="flex flex-col items-center justify-start">
          <div className="flex items-center">
            <span className="w-[20px] h-[5px] rounded-full bg-[#FCD34D] mr-2" />
            <span className="text-[#615E83] text-[12px]">Completed Orders</span>
          </div>
          <span className="ml-2 text-[16px] font-bold text-[#1E1B39] pt-[10px]">
            X,XXX,XXX
          </span>
        </div>
      </div>
    </div>
  );
};

export default TotalOrderDonutChart;
