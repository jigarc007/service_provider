import React from "react";
import TopNavBar from "./TopNavbar";
import SideNavBar from "./SideNavBar";
import StatsCard from "./StatsCard";
import LineChartComponent from "./LineChartComponent";
import SegmentAndDemographicComponent from "./SegmentAndDemographicComponent";
import RadialBarChart from "./RadialBarChart";
import ServiceProviderReportChart from "./ServiceProviderReportChart";
import FilterComponent from "./FilterComponent";
import { ReactComponent as Bar } from "../assets/images/bar.svg";
import { ReactComponent as Pie } from "../assets/images/pie.svg";
import { ReactComponent as FullPie } from "../assets/images/fullPie.svg";

import { ReactComponent as Shopping } from "../assets/images/shopping.svg";
import { ReactComponent as User } from "../assets/images/user.svg";
import { ReactComponent as Star } from "../assets/images/star.svg";
import { ReactComponent as Rate } from "../assets/images/rate.svg";
import RenderBarIcon from "./RenderBarIcon";
import SidCard from "./SideCards";
import ServiceProviderCard from "./ServiceProviderCard";
import ServiceOfferingChart from "./ServiceOfferingChart";

const supportAndComplianceData: any[] = [
  {
    "Support tickets": [
      {
        phone: "019273645",
        name: "Name of the Raiser",
        issueTitle: "I am facing Technical Issue during the Signup process",
        issueDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        status: "Escalated",
        statusColor: "#E77D00",
        tags: [
          { title: "Technical", color: "#FF847C", backgroundColor: "#fff3f2" },
          { title: "Healthcare", color: "#4318FF", backgroundColor: "#ece8ff" },
        ],
        avtarIcon: require("../assets/images/girl.png"),
        statusBackground: "#fff3e6",
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
    ],
  },
  {
    "Open tickets": [
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
    ],
  },
  {
    "In Progress": [
      {
        phone: "019273645",
        name: "Robert Williams",
        status: "Pending",
        statusColor: "#FBBC05",
        percentage: 70,
        tags: [
          { title: "Technical", color: "#FF847C", backgroundColor: "#fff3f2" },
          { title: "Healthcare", color: "#4318FF", backgroundColor: "#ece8ff" },
        ],
        avtarIcon: require("../assets/images/boy.png"),
        isShowProgress: true,
      },
      {
        phone: "019273645",
        name: "Robert Williams",
        status: "Pending",
        statusColor: "#FBBC05",
        percentage: 70,
        tags: [
          { title: "Technical", color: "#FF847C", backgroundColor: "#fff3f2" },
          { title: "Healthcare", color: "#4318FF", backgroundColor: "#ece8ff" },
        ],
        avtarIcon: require("../assets/images/boy.png"),
        isShowProgress: true,
      },
    ],
  },
  {
    Solved: [
      {
        phone: "019273645",
        name: "Robert Williams",
        status: "Resolved",
        statusColor: "#029738",
        percentage: 70,
        tags: [
          { title: "Technical", color: "#FF847C", backgroundColor: "#fff3f2" },
          { title: "Healthcare", color: "#4318FF", backgroundColor: "#ece8ff" },
        ],
        avtarIcon: require("../assets/images/girl.png"),
        isShowProgress: false,
      },
      {
        phone: "019273645",
        name: "Robert Williams",
        status: "Resolved",
        statusColor: "#029738",
        percentage: 70,
        tags: [
          { title: "Technical", color: "#FF847C", backgroundColor: "#fff3f2" },
          { title: "Healthcare", color: "#4318FF", backgroundColor: "#ece8ff" },
        ],
        avtarIcon: require("../assets/images/boy.png"),
        isShowProgress: false,
      },
    ],
  },
  {
    "Compliance Status": [
      {
        phone: "019273645",
        name: "Robert Williams",
        status: "Pending",
        statusColor: "#FBBC05",
        percentage: 70,
        tags: [
          { title: "Technical", color: "#FF847C", backgroundColor: "#fff3f2" },
          { title: "Healthcare", color: "#4318FF", backgroundColor: "#ece8ff" },
        ],
        avtarIcon: require("../assets/images/boy.png"),
        isShowProgress: true,
      },
      {
        phone: "019273645",
        name: "Robert Williams",
        status: "Pending",
        statusColor: "#FBBC05",
        percentage: 70,
        tags: [
          { title: "Technical", color: "#FF847C", backgroundColor: "#fff3f2" },
          { title: "Healthcare", color: "#4318FF", backgroundColor: "#ece8ff" },
        ],
        avtarIcon: require("../assets/images/girl.png"),
        isShowProgress: true,
      },
    ],
  },
];
const ServiceProviderDashboard = () => {
  const cardData = [
    {
      title: "Total Service Providers",
      value: "XXXX.XX",
      percentage: 5,
      description: "Compared to last week",
      star: 0,
      icon: <Bar />,
      belowIcon: <RenderBarIcon color="#FBBC05" />,
      isRating: false,
      color: "#18ce98",
    },
    {
      title: "New Service Providers",
      value: "XXXX",
      percentage: -10,
      description: "Compared to last week",
      icon: <User />,
      star: 0,
      belowIcon: <RenderBarIcon color="#ee5d50" />,
      isRating: false,
      color: "#ee5d50",
    },
    {
      title: "Active Service Provider",
      value: "XXXX",
      percentage: 10,
      description: "Compared to last week",
      icon: <Shopping />,
      star: 0,
      belowIcon: <RenderBarIcon color="#18ce98" />,
      isRating: false,
      color: "#18ce98",
    },
    {
      title: "Average Rating",
      value: "XXXX.XX",
      percentage: 5,
      description: "Compared to last week",
      icon: <Star />,
      star: 4,
      belowIcon: <RenderBarIcon color="#FBBC05" />,
      isRating: true,
      color: "#18ce98",
    },
    {
      title: "Service Completion Rate",
      value: "XXXX",
      percentage: 85,
      description: "Compared to last week",
      icon: <Pie />,
      star: 0,
      belowIcon: <FullPie />,
      isRating: false,
      color: "#18ce98",
    },
    {
      title: "Active Service Provider",
      value: "XXXX",
      percentage: 100,
      description: "Compared to last week",
      icon: <Rate />,
      star: 0,
      belowIcon: <RenderBarIcon color="#18ce98" />,
      isRating: false,
      color: "#18ce98",
    },
  ];
  const serviceProviderData = [
    {
      title: "Construction Sector",
      avatars: [
        {
          url: "https://mui.com/static/images/avatar/1.jpg",
          name: "tom cruise",
          color: "#C99716",
        },
        {
          url: "https://mui.com/static/images/avatar/2.jpg",
          name: "dua lipa",
          color: "#1AC916",
        },
        {
          url: "https://mui.com/static/images/avatar/4.jpg",
          name: "john wick",
          color: "#9016C9",
        },
      ],
      totalAvatar: 203,
      percentage: 11.02,
      backgroundImg: require("../assets/images/construction.png"),
    },
    {
      title: "Health Care Sector",
      avatars: [
        {
          url: "https://mui.com/static/images/avatar/1.jpg",
          name: "tom cruise",
          color: "#C99716",
        },
        {
          url: "https://mui.com/static/images/avatar/2.jpg",
          name: "dua lipa",
          color: "#1AC916",
        },
        {
          url: "https://mui.com/static/images/avatar/4.jpg",
          name: "john wick",
          color: "#9016C9",
        },
      ],
      percentage: 11.02,
      totalAvatar: 183,
      backgroundImg: require("../assets/images/healthcare.png"),
    },
    {
      title: "Home Services Sector",
      avatars: [
        {
          url: "https://mui.com/static/images/avatar/1.jpg",
          name: "tom cruise",
          color: "#C99716",
        },
        {
          url: "https://mui.com/static/images/avatar/2.jpg",
          name: "dua lipa",
          color: "#1AC916",
        },
        {
          url: "https://mui.com/static/images/avatar/4.jpg",
          name: "john wick",
          color: "#9016C9",
        },
      ],
      percentage: 11.02,
      totalAvatar: 153,
      backgroundImg: require("../assets/images/home_service.png"),
    },
    {
      title: "Pet Care Sector",
      avatars: [
        {
          url: "https://mui.com/static/images/avatar/1.jpg",
          name: "tom cruise",
          color: "#C99716",
        },
        {
          url: "https://mui.com/static/images/avatar/2.jpg",
          name: "dua lipa",
          color: "#1AC916",
        },
        {
          url: "https://mui.com/static/images/avatar/4.jpg",
          name: "john wick",
          color: "#9016C9",
        },
      ],
      percentage: 11.02,
      totalAvatar: 103,
      backgroundImg: require("../assets/images/pet_care.png"),
    },
  ];
  const filterData = {
    buttons: [
      {
        title: "Assign Order",
      },
      {
        title: "Add New Service Providers",
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
  return (
    <div className="flex w-[100%]">
      {/* Sidebar */}
      <div className="w-[4%]">
        <SideNavBar />
      </div>
      {/* Main Content */}
      <div className="flex-1 w-[96%] bg-[#EAEBFF] pl-[10px]">
        {/* Top Nav Bar */}
        <TopNavBar />

        {/* Dashboard content */}
        <div className="flex justify-between pt-[24px] pr-[40px] pl-[40px]">
          <FilterComponent filterData={filterData} />
        </div>
        <div className="flex justify-between pt-[24px] pr-[40px] pb-[60px] pl-[40px] gap-[20px] w-[100%]">
          <div className="flex-col justify-between w-[70%]">
            <div className="">
              <StatsCard cardData={cardData} />
            </div>

            {/* Line chart */}
            <div className="mt-6 bg-white p-[20px] shadow-md rounded-lg">
              <LineChartComponent />
            </div>
            <div className="mt-6 bg-white p-[20px] shadow-md rounded-lg">
              <SegmentAndDemographicComponent />
            </div>
            <div className="mt-6 bg-white p-[20px] shadow-md rounded-lg">
              <ServiceProviderCard serviceProviderData={serviceProviderData} />
            </div>
            <div className="mt-6 bg-white p-[20px] shadow-md rounded-lg">
              <ServiceOfferingChart />
            </div>
            <div className="flex gap-2 w-[full] ">
              <div className="mt-6 bg-white p-[20px] shadow-md rounded-lg w-[50%]">
                <RadialBarChart />
              </div>
              <div className="mt-6 bg-white p-[20px] shadow-md rounded-lg w-[50%]">
                <ServiceProviderReportChart />
              </div>
            </div>
          </div>
          <div className="flex-col justify-between w-[30%] bg-[#EAEBFF]">
            <SidCard
              supportAndComplianceData={supportAndComplianceData}
              isSupportAndCompliance={true}
            />
          </div>
        </div>
        {/* Add more components such as pie charts, demographics */}
      </div>
    </div>
  );
};

export default ServiceProviderDashboard;
