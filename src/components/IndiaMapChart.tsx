import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMap from "highcharts/modules/map";
import mapDataIndia from "@highcharts/map-collection/countries/in/in-all.geo.json";

// Initialize the map module
HighchartsMap(Highcharts);

const IndiaMap = () => {
  const options = {
    chart: {
      map: mapDataIndia,
    },
    title: {
      text: "Attributes as per location, years of experience, specialization",
    },
    series: [
      {
        data: [
          { "hc-key": "in-py", value: 10, color: "#FE8081" }, // Puducherry - pink
          { "hc-key": "in-ld", value: 8, color: "#FFC764" }, // Lakshadweep - light orange
          { "hc-key": "in-wb", value: 5, color: "#FE8081" }, // West Bengal - pink
          { "hc-key": "in-kl", value: 20, color: "#62B1FA" }, // Kerala - blue
          { "hc-key": "in-tn", value: 15, color: "#FFC764" }, // Tamil Nadu - light orange
          { "hc-key": "in-ap", value: 12, color: "#62B1FA" }, // Andhra Pradesh - blue
          { "hc-key": "in-ka", value: 25, color: "#62B1FA" }, // Karnataka - blue
          { "hc-key": "in-mh", value: 30, color: "#F9CD77" }, // Maharashtra - yellow
          { "hc-key": "in-or", value: 18, color: "#51D9E1" }, // Odisha - cyan
          { "hc-key": "in-jh", value: 10, color: "#51D9E1" }, // Jharkhand - cyan
          { "hc-key": "in-br", value: 14, color: "#FFC764" }, // Bihar - light orange
          { "hc-key": "in-up", value: 40, color: "#F07FC1" }, // Uttar Pradesh - purple
          { "hc-key": "in-ut", value: 8, color: "#F07FC1" }, // Uttarakhand - purple
          { "hc-key": "in-hr", value: 7, color: "#F07FC1" }, // Haryana - purple
          { "hc-key": "in-pb", value: 12, color: "#F07FC1" }, // Punjab - purple
          { "hc-key": "in-hp", value: 6, color: "#FE8081" }, // Himachal Pradesh - pink
          { "hc-key": "in-jk", value: 5, color: "#FE8081" }, // Jammu and Kashmir - pink
          { "hc-key": "in-ct", value: 9, color: "#51D9E1" }, // Chhattisgarh - cyan
          { "hc-key": "in-ga", value: 3, color: "#62B1FA" }, // Goa - blue
          { "hc-key": "in-mn", value: 2, color: "#FFC764" }, // Manipur - light orange
          { "hc-key": "in-mz", value: 1, color: "#FFC764" }, // Mizoram - light orange
          { "hc-key": "in-nl", value: 4, color: "#51D9E1" }, // Nagaland - cyan
          { "hc-key": "in-sk", value: 1, color: "#FE8081" }, // Sikkim - pink
          { "hc-key": "in-ml", value: 5, color: "#F07FC1" }, // Meghalaya - purple
          { "hc-key": "in-as", value: 20, color: "#62B1FA" }, // Assam - blue
          { "hc-key": "in-ar", value: 3, color: "#FE8081" }, // Arunachal Pradesh - pink
          { "hc-key": "in-tr", value: 4, color: "#FE8081" }, // Tripura - pink
        ],
        mapData: mapDataIndia,
        joinBy: "hc-key",
        name: "Service Provider Segmentation",
        states: {
          hover: {
            color: "#BADA55",
          },
        },
      },
    ],
  };

  return (
    <div className="bg-white rounded-lg shadow w-full">
      <div className="aspect-w-16 aspect-h-9">
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={"mapChart"}
          options={options}
          containerProps={{ style: { width: '100%', height: '100%' } }}
        />
      </div>
    </div>
  );
};

export default IndiaMap;
