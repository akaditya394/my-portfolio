import React from "react";
import Button from "./Button";
import Details from "./Details";
import ImageBoxes from "./ImageBoxes";

const Content = () => {
  return (
    <div className="w-[85%] mx-auto mt-3">
      <div>
        <p className="text-[#70757a] text-sm">About 1 result (0.64 seconds) </p>
      </div>
      <div
        className="flex flex-col justify-start gap-2
       md:flex-row md:items-center md:justify-between mt-5"
      >
        <div>
          <p className="text-3xl">Aditya Kumar</p>
          <p className="text-sm">Software Developer</p>
        </div>
        <div className="flex flex-row md:gap-2 gap-1 overflow-x-scroll md:overflow-hidden">
          <Button styles="text-sm text-[#0060F0] bg-[#E2EEFF] rounded-full px-4 py-2">
            Overview
          </Button>
          <Button styles="text-sm text-[#0060F0] bg-[#E2EEFF] rounded-full px-4 py-2">
            Education
          </Button>
          <Button styles="text-sm text-[#0060F0] bg-[#E2EEFF] rounded-full px-4 py-2">
            Work Experience
          </Button>
          <Button styles="text-sm text-[#0060F0] bg-[#E2EEFF] rounded-full px-4 py-2">
            Projects
          </Button>
        </div>
      </div>
      <div
        className="flex lg:flex-row flex-col justify-evenly bg-[rgba(226,238,255,0.5)] 
      p-6 rounded-lg mt-2"
      >
        <ImageBoxes />
        <Details />
      </div>
    </div>
  );
};

export default Content;
