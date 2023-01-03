import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#f2f2f2] bottom-0">
      <div className="px-3 py-3 border-b-2">
        <p className="text-sm">India</p>
      </div>
      <div className="flex flex-row items-center justify-between px-3 py-3">
        <div className="flex flex-row gap-2">
          <p className="text-sm">About</p>
          <p className="text-sm">Advertising</p>
          <p className="text-sm">Bussiness</p>
          <p className="text-sm">How Search works</p>
        </div>
        <div className="flex flex-row gap-2">
          <p className="text-sm">Privacy</p>
          <p className="text-sm">Terms</p>
          <p className="text-sm">Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
