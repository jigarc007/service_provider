import { Divider, Avatar, Link } from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material";
import React from "react";
interface CardType {
  title: string;
  value: string;
  percentage: number;
  description: string;
  icon: JSX.Element;
  belowIcon: JSX.Element;
  isRating: boolean;
  star: number;
}
interface StatsCardProps {
  cardData: CardType[];
}
const renderStar = (star: number) => {
  console.log({ star });
  return (
    <div className="flex gap-[2px]">
      {Array.from({ length: 5 })?.map((item, index) => {
        if (index < star) {
          return <Star height={17} width={17} style={{ fill: "#FBBC05" }} />;
        } else {
          return (
            <StarBorder height={17} width={17} style={{ fill: "#FBBC05" }} />
          );
        }
      })}
    </div>
  );
};
const StatsCard = ({ cardData }: StatsCardProps) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {cardData?.map(
        (
          {
            title,
            percentage,
            description,
            value,
            icon,
            belowIcon,
            isRating,
            star,
          },
          index
        ) => (
          <div
            key={index}
            className="flex-col bg-white p-4 shadow-md rounded-lg w-auto"
          >
            <div className="flex items-center justify-between pb-5">
              <span className="flex justify-center items-center rounded-[16px] w-[60px] h-[60px] bg-[#f4f7fe]">
                {icon}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-[#808080]">
                  {title}
                </h3>
                <p className="text-3xl font-bold text-black">{value}</p>
              </div>
            </div>
            <Divider />
            <div className="flex items-center justify-between pt-5">
              {!isRating ? (
                <>
                  <span>{belowIcon}</span>
                  <div className={`flex text-sm `}>
                    <p
                      className="text-[14px] font-semibold"
                      style={{
                        color: `${percentage > 0 ? "#18ce98" : "#ee5d50"}`,
                      }}
                    >
                      {percentage}%&nbsp;
                    </p>
                    <p className="pl-[10px] text-[#808080] text-[14px] font-semibold">
                      more from last week
                    </p>
                  </div>
                </>
              ) : (
                <div className="flex justify-between items-center w-full">
                  <div>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                  </div>
                  <span className="flex-col">
                    Abhinav {star}
                    {renderStar(star)}
                  </span>
                  <span className="flex-col">
                    <Link
                      href="#"
                      style={{ color: "#4318FF", textDecoration: "none" }}
                    >
                      View All
                    </Link>
                    <p>1 day ago</p>
                  </span>
                </div>
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default StatsCard;
