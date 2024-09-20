import { ReactComponent as Support } from "../assets/images/mdi_support.svg";
import { ReactComponent as Question } from "../assets/images/question.svg";

import { Button, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

interface SupportAndComplianceDataProps {
  supportAndComplianceData: any[];
  isSupportAndCompliance: boolean;
}

const SidCard: React.FC<SupportAndComplianceDataProps> = ({
  supportAndComplianceData,
  isSupportAndCompliance,
}) => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200],
      ...theme.applyStyles("dark", {
        backgroundColor: theme.palette.grey[800],
      }),
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: "#FBBC05",
      ...theme.applyStyles("dark", {
        backgroundColor: "#308fe8",
      }),
    },
  }));
  return (
    <div className="flex-col justify-between bg-[#f0f4f7] w-full rounded-lg">
      {isSupportAndCompliance ? (
        <div className="flex items-center justify-between bg-[#FFF] p-[20px] rounded-lg">
          <div className="flex items-center gap-2">
            <span className="flex justify-center items-center rounded-[16px] w-[60px] h-[60px] bg-[#f4f7fe]">
              <Support />
            </span>

            <h2 className="text-[16px] font-semibold">Support & Compliance</h2>
          </div>
        </div>
      ) : (
        <div className="flex-col items-center justify-between bg-[#FFF] p-[20px] rounded-lg">
          <div className="flex items-center justify-between gap-2 pb-[10px]">
            <span className="flex justify-center items-center rounded-[16px] w-[60px] h-[60px] bg-[#f4f7fe]">
              <Question />
            </span>
            <span className="flex-col items-start justify-start">
              <h2 className="text-[16px] font-semibold text-[#808080]">
                Total Tickets
              </h2>
              <p className="flex text-[28px] font-bold text-[#0D0D0D]">XXX</p>
            </span>
            <div className="flex justify-start p-[15px]">
              <Button
                variant="contained"
                style={{ backgroundColor: "#4318ff", borderRadius: "8px" }}
              >
                Raise A Ticket
              </Button>
            </div>
          </div>

          <BorderLinearProgress variant="determinate" value={70} />
        </div>
      )}

      {supportAndComplianceData.map((item: any, index: number) => {
        return (
          <div key={index} className="flex-col justify-between">
            <div className="flex-col justify-between items-center p-[15px]">
              <div className="flex justify-between items-center pb-[15px]">
                <h2 className="text-[#000] text-[16px] font-semibold">
                  {Object.keys(item)?.[0] || ""}
                </h2>
                <button className="text-[#4318FF] text-[14px] font-semibold bg-[#EAEBFF] rounded-[10px] px-[10px] py-[5px]">
                  View All
                </button>
              </div>
              <div className="flex-col items-start justify-between">
                {supportAndComplianceData[index][Object.keys(item)[0]]?.map(
                  (
                    {
                      name,
                      avtarIcon,
                      phone,
                      tags,
                      status,
                      statusColor,
                      issueTitle,
                      issueDescription,
                      isShowProgress,
                      statusBackground,
                      percentage,
                    }: any,
                    index: any
                  ) => {
                    return (
                      <div className="flex-col items-center gap-2 bg-[#FFF] p-[20px] rounded-lg mb-5">
                        <div className="flex items-center justify-start pb-[15px] gap-2">
                          <img src={avtarIcon} alt="avtar" />
                          <span className="flex flex-col items-start pl-[10px]">
                            <span className="text-[14px] text-[#252762] font-bold">
                              {phone}
                            </span>
                            <span className="text-[12px] text-[#252762] font-normal">
                              {name}
                            </span>
                          </span>
                          {tags?.map(
                            (
                              { title, color, backgroundColor }: any,
                              index: any
                            ) => {
                              return (
                                <span
                                  className="text-[12px] py-[4px] px-[15px] rounded-[10px]  font-normal"
                                  style={{
                                    color: color,
                                    backgroundColor: backgroundColor,
                                    border: `1px solid ${color}`,
                                  }}
                                >
                                  {title}
                                </span>
                              );
                            }
                          )}
                        </div>
                        <Divider />
                        {!isShowProgress ? (
                          <div className="flex flex-col justify-start items-start pt-[15px]">
                            <span className="text-[14px] text-[#252762] font-bold">
                              {issueTitle || ""}
                            </span>
                            <span className="text-[12px] text-[#252762]">
                              {issueDescription || ""}
                            </span>
                            <span
                              className="mt-[10px] text-[12px] py-[4px] px-[15px] rounded-[10px]  font-normal"
                              style={{
                                color: statusColor,
                                backgroundColor: statusBackground,
                                border: `1px solid ${statusColor}`,
                              }}
                            >
                              {status}
                            </span>
                          </div>
                        ) : (
                          <div className="">
                            <span className="flex text-[14px] py-[10px] text-[#0D0D0D] font-medium">
                              Status Pending
                            </span>
                            <div>
                              <BorderLinearProgress
                                variant="determinate"
                                value={percentage}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        );
      })}
      {isSupportAndCompliance && (
        <div className="flex justify-start p-[15px]">
          <Button
            variant="contained"
            style={{ backgroundColor: "#4318ff", borderRadius: "8px" }}
          >
            Raise A Ticket
          </Button>
        </div>
      )}
    </div>
  );
};
export default SidCard;
