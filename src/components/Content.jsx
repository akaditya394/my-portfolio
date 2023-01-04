import React, { useState } from "react";
import Button from "./Button";
import Details from "./Details";
import ImageBoxes from "./ImageBoxes";
import Item from "./Item";
import ResultItem from "./ResultItem";

const Content = () => {
  const [contentType, setContentType] = useState("projects");
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
      <div className="w-[100%] mx-auto flex flex-row items-start justify-between">
        {contentType === "projects" && (
          <div className="mt-10 flex flex-col gap-10 w-[55%]">
            <ResultItem />
            <ResultItem />
            <ResultItem />
            <ResultItem />
          </div>
        )}

        <div
          className="w-[35%] mt-10 flex flex-col items-start gap-5 
        border-l-2 p-4"
        >
          <p className="text-[#202124] text-xl">About</p>
          <p className="text-[#4d5156] text-md">
            Aliquip elit duis aute veniam esse ipsum nostrud sit sit qui aute
            ut. Sit ullamco nulla mollit sit in. Sit sit nulla eiusmod nulla
            commodo enim ex in cupidatat Lorem elit veniam.
          </p>
          <p className="text-[#202124] text-md">
            <span className="font-semibold">Born:</span> 4 June 2001
          </p>
          <p className="text-[#202124] text-md">
            <span className="font-semibold">Education:</span> Indian Institue of
            Information Technology
          </p>
          <div className="flex flex-col items-start w-[100%]">
            <p className="text-[#202421] text-lg font-semibold">Projects</p>
            <div className="mt-3 flex flex-row overflow-x-scroll w-[100%] gap-4">
              <Item
                name="Web3 Crowdfunding"
                src={require("../assets/images/thirdweblogo.jpeg")}
                time="7 July 2022"
              />
              <Item
                name="Netflix Clone"
                src={require("../assets/images/netflixlogo.png")}
                time="7 July 2022"
              />
              <Item
                name="Instagram Clone"
                src={require("../assets/images/instalogo.jpg")}
                time="7 July 2022"
              />
              <Item
                name="LinkedIn Clone"
                src={require("../assets/images/linkedinlogo.jpg")}
                time="7 July 2022"
              />
              <Item
                name="Aalekha"
                src={require("../assets/images/reactlogo.png")}
                time="7 July 2022"
              />
              <Item
                name="Twitter Clone"
                src={require("../assets/images/twitter.png")}
                time="7 July 2022"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
