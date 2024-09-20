import React from "react";
import TopNavBar from "./TopNavbar";
import SideNavBar from "./SideNavBar";
import StatsCard from "./StatsCard";
import FilterComponent from "./FilterComponent";
import { ReactComponent as Bar } from "../assets/images/bar.svg";
import { ReactComponent as Shopping } from "../assets/images/shopping.svg";
import { ReactComponent as User } from "../assets/images/user.svg";
import RenderBarIcon from "./RenderBarIcon";
import SidCard from "./SideCards";
import TotalOrderDonutChart from "./TotalOrderDonutChart";
import SectorPerformanceBarChart from "./SectorPerformanceBarChart";
import UpdateStatus from "./UpdateStatus";
const cardData = [
  {
    title: "Total Sales",
    value: "XXXX.XX",
    percentage: 5,
    description: "more from last week",
    star: 0,
    icon: <Bar />,
    belowIcon: <RenderBarIcon color="#FBBC05" />,
    isRating: false,
    color: "#18ce98",
  },
  {
    title: "Total Customers",
    value: "XXXX",
    percentage: -10,
    description: "more from last week",
    icon: <User />,
    star: 0,
    belowIcon: <RenderBarIcon color="#ee5d50" />,
    isRating: false,
    color: "#ee5d50",
  },
  {
    title: "Total Orders",
    value: "XXXX",
    percentage: 10,
    description: "more from last week",
    icon: <Shopping />,
    star: 0,
    belowIcon: <RenderBarIcon color="#18ce98" />,
    isRating: false,
    color: "#18ce98",
  },
];

const filterData = {
  buttons: [
    {
      title: "Create Order",
    },
    {
      title: "+ Add Customer",
    },
    {
      title: "+ Add Service Providers",
    },
  ],
  selects: [
    {
      type: "date",
      title: "This Year",
      options: [
        {
          title: "This Year",
          value: "thisYear",
        },
      ],
    },
    {
      type: "select",
      title: "Location",
      options: [
        {
          title: "Mumbai",
          value: "mumbai",
        },
        {
          title: "Delhi",
          value: "delhi",
        },
      ],
    },
    {
      type: "select",
      title: "Status",
      options: [
        {
          title: "Open",
          value: "Open",
        },
        {
          title: "Escalated",
          value: "escalated",
        },
        {
          title: "Resolved",
          value: "Resolved",
        },
      ],
    },
  ],
};
const supportAndComplianceData: any[] = [
  {
    "Pending tickets (03)": [
      {
        phone: "019273645",
        name: "Name of the Raiser",
        issueTitle: "I am facing Technical Issue during the Signup process",
        issueDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        status: "Acknowledged",
        statusColor: "#FF847C",
        tags: [
          { title: "Technical", color: "#FF847C", backgroundColor: "#fff3f2" },
          { title: "Healthcare", color: "#4318FF", backgroundColor: "#ece8ff" },
        ],
        avtarIcon: require("../assets/images/girl.png"),
        statusBackground: "#fff3f2",
        isShowProgress: false,
      },
      {
        phone: "019273645",
        name: "Name of the Raiser",
        issueTitle: "I am facing Technical Issue during the Signup process",
        issueDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        status: "Open",
        statusColor: "#0054E7",
        tags: [
          { title: "Technical", color: "#FF847C", backgroundColor: "#fff3f2" },
          { title: "Healthcare", color: "#4318FF", backgroundColor: "#ece8ff" },
        ],
        avtarIcon: require("../assets/images/girl.png"),
        statusBackground: "#e5eefd",
        isShowProgress: false,
      },
      {
        phone: "019273645",
        name: "Name of the Raiser",
        issueTitle: "I am facing Technical Issue during the Signup process",
        issueDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        status: "On Hold",
        statusColor: "#ffbf04",
        tags: [
          { title: "Technical", color: "#FF847C", backgroundColor: "#fff3f2" },
          { title: "Healthcare", color: "#4318FF", backgroundColor: "#ece8ff" },
        ],
        avtarIcon: require("../assets/images/girl.png"),
        statusBackground: "#fff9f0",
        isShowProgress: false,
      },
    ],
  },
];
const MainDashboard = () => {
  return (
    <div className="flex w-[100%]">
      {/* Sidebar */}
      <div className="w-[4%]">
        <SideNavBar />
      </div>
      {/* Main Content */}
      <div className="flex-1 w-[96%]">
        {/* Top Nav Bar */}
        <TopNavBar />

        {/* Dashboard content */}
        <div className="flex justify-between pt-[24px] pr-[40px] pl-[40px] bg-[#EAEBFF]">
          <FilterComponent filterData={filterData} />
        </div>
        <div className="flex justify-between pt-[24px] pr-[40px] pb-[60px] pl-[40px] bg-[#EAEBFF] gap-[20px] w-[100%]">
          <div className="flex-col justify-between w-[75%]">
            <div className="">
              <StatsCard cardData={cardData} />
            </div>
            <div className="flex gap-2 w-[full] ">
              <div className="mt-6 bg-white p-[15px] shadow-md rounded-lg w-[30%]">
                <TotalOrderDonutChart
                  totalOrders={10}
                  activeOrders={8}
                  completedOrders={2}
                />
              </div>
              <div className="mt-6 bg-white p-[15px] shadow-md rounded-lg w-[70%]">
                <SectorPerformanceBarChart />
              </div>
            </div>
            <div className="mt-6 bg-white p-[15px] shadow-md rounded-lg">
              <UpdateStatus />
            </div>
          </div>
          <div className="flex-col justify-between w-[25%] bg-[#EAEBFF]">
            <SidCard
              supportAndComplianceData={supportAndComplianceData}
              isSupportAndCompliance={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
