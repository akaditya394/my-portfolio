import React from "react";

const Footer = () => {
  return (
    <div
      className="bg-[#f2f2f2] absolute w-screen \
    bottom-0 text-[#70757a]"
    >
      <div className="px-3 py-3 border-b-2">
        <p className="text-sm text-[#70757a]">India</p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between px-3 py-3">
        <div className="flex flex-row gap-2">
          <p className="text-sm text-[#70757a]">About</p>
          <p className="text-sm text-[#70757a]">Advertising</p>
          <p className="text-sm text-[#70757a]">Bussiness</p>
          <p className="text-sm text-[#70757a]">How Search works</p>
        </div>
        <div className="flex flex-row gap-2">
          <p className="text-sm text-[#70757a]">Privacy</p>
          <p className="text-sm text-[#70757a]">Terms</p>
          <p className="text-sm text-[#70757a]">Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
