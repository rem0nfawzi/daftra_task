import CustomSwitch from "@/components/shared/switch/Switch";
import React from "react";

const AlertsBanner = () => {
  return (
    <div className="bg-primary-500 px-10 py-6 rounded-sm flex items-center justify-between mb-6">
      <div>
        <p className="text-lg text-white font-bold">UI Designer in Egypt</p>
        <p className="text-sm text-white">70 job positions</p>
      </div>
      <CustomSwitch />
    </div>
  );
};

export default AlertsBanner;
