import React from "react";

const GoogleFooter = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <img
        src={require("../assets/images/googleLogo.png")}
        alt="google"
        className="object-contain h-10"
      />
      <p className="text-sm text-[#4285f4]">1</p>
    </div>
  );
};

export default GoogleFooter;
