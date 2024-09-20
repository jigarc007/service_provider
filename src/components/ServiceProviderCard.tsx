import React from "react";
import {
  Card,
  CardContent,
  Avatar,
  AvatarGroup,
} from "@mui/material";

interface ServiceProviderCardProps {
  serviceProviderData: any[];
}

const ServiceProviderCard: React.FC<ServiceProviderCardProps> = ({
  serviceProviderData,
}: any) => {
  return (
    <div className="flex flex-col gap-[10px]">
      <h2 className="flex text-[20px] font-bold p-[15px]">
        Top Service Providers
      </h2>

      <div className="flex justify-between items-start">
        {serviceProviderData.map(
          (
            { title, backgroundImg, avatars, percentage, totalAvatar }: any,
            index: number
          ) => (
            <Card
              key={index}
              className="max-w-sm mx-auto w-[250px] border-[1px] border-[#CCCCCC] rounded-[10px]"
            >
              <CardContent className="flex flex-col items-start">
                <img
                  src={backgroundImg}
                  alt={title}
                  width={250}
                  height={250}
                  className="overflow-hidden bg-cover"
                />
                <h2 className="py-[10px] text-[14px] font-bold">{title}</h2>
                <div className="flex justify-between items-center gap-[10px]">
                  <AvatarGroup
                    total={totalAvatar}
                    sx={{
                      "& .MuiAvatarGroup-avatar": {
                        width: "40px",
                        height: "40px",
                        fontSize: "10px",
                      },
                    }}
                  >
                    {avatars?.map(
                      ({ url, name, color }: any, index: number) => (
                        <Avatar
                          style={{ border: `1px solid ${color}` }}
                          alt={name}
                          src={url}
                        />
                      )
                    )}
                  </AvatarGroup>
                  <div className="flex h-[30px] justify-center items-center bg-[#E6F8EF] text-[#18CE98] text-[12px] font-bold rounded-[8px] p-[5px]">
                    <p>{`${percentage > 0 ? "+" : "-"}${percentage}%`}</p>
                  </div>
                </div>
                {/* <Avatar src={avatar} alt={name} className="w-24 h-24 mb-4" /> */}
              </CardContent>
            </Card>
          )
        )}
      </div>
    </div>
  );
};

export default ServiceProviderCard;
