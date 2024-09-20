import React from "react";

const UpdateStatus: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="flex justify-between items-center w-full pb-[20px]">
        <h2 className="text-[20px] font-bold text-[#0D0D0D]">
          Updates (10)
        </h2>
        <div className="flex px-[20px] py-[10px] rounded-[70px] bg-[#F4F7FE]">
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            View All
          </button>
        </div>
      </div>
      <div className="space-y-3">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`p-3 flex-col rounded-lg border-[1px] ${
              index % 2 === 0 ? "border-[#FA18FF]" : "border-[#11BEA9]"
            } ${index % 2 === 0 ? "bg-[#fff0ff]" : "bg-[#f1fffd]"}`}
          >
            <h3 className="flex font-medium text-gray-800">Title of the update</h3>
            <p className="flex text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdateStatus;
