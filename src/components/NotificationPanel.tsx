import React from "react";
import { ReactComponent as MessageIcon } from "../assets/images/message.svg";
import { ReactComponent as BellIcon } from "../assets/images/bell.svg";
import { ReactComponent as SettingIcon } from "../assets/images/setting.svg";

const NotificationPanel = () => {
  return (
    <div className="flex space-x-6 justify-center items-center">
      {/* Notification Icon */}
      <div className="relative">
        <div className="w-16 h-16 bg-indigo-100 rounded-[13px] flex justify-center items-center">
          <BellIcon width={"25px"} height={"25px"} />
        </div>
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-indigo-900 rounded-full">
          21
        </span>
      </div>

      {/* Message Icon */}
      <div className="relative">
        <div className="w-16 h-16 bg-indigo-100 rounded-[13px] flex justify-center items-center">
          <MessageIcon width={"25px"} height={"25px"} />
        </div>
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-indigo-900 rounded-full">
          53
        </span>
      </div>

      {/* Settings Icon */}
      <div className="relative">
        <div className="w-16 h-16 bg-red-100 rounded-[13px] flex justify-center items-center">
          <SettingIcon width={"25px"} height={"25px"} />
        </div>
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
          19
        </span>
      </div>
    </div>
  );
};

export default NotificationPanel;
