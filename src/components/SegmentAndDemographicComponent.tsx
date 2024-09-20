import React from "react";
import PieChart from "./PieChart";
import IndiaMap from "./IndiaMapChart";

function SegmentAndDemographicComponent() {
  return (
    <div className="">
      <h2 className="flex text-[20px] text-[#0D0D0D] font-bold pb-[15px]">
        Service Provider Segmentation & Demographics
      </h2>
      <div className="flex gap-[20px] w-full">
        <div className="w-[50%]">
          <PieChart />
        </div>
        <div className="w-[50%]">
          <IndiaMap />
        </div>
      </div>
    </div>
  );
}

export default SegmentAndDemographicComponent;
