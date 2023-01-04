import React, { useState } from "react";
import About from "./About";
import Button from "./Button";
import Details from "./Details";
import Education from "./Education";
import GoogleFooter from "./GoogleFooter";
import ImageBoxes from "./ImageBoxes";
import Overview from "./Overview";
import Projects from "./Projects";
import WorkExperience from "./WorkExperience";

const Content = () => {
  const [contentType, setContentType] = useState("overview");
  return (
    <div className="w-[95%] mx-auto mt-3">
      <div className="w-[93%] mx-auto">
        <p className="text-[#70757a] text-sm">About 1 result (0.64 seconds) </p>
      </div>
      <div
        className="flex flex-col justify-start gap-2
       md:flex-row md:items-center md:justify-between mt-5 w-[93%] mx-auto"
      >
        <div>
          <p className="text-3xl">Aditya Kumar</p>
          <p className="text-sm">Software Developer</p>
        </div>
        <div className="flex flex-row md:gap-2 gap-1 overflow-x-scroll md:overflow-hidden">
          <Button
            onClick={() => setContentType("overview")}
            styles={`text-sm text-[#0060F0] bg-[#E2EEFF] rounded-full px-4 py-2 ${
              contentType === "overview"
                ? "border-[0.1rem] border-[#0060F0]"
                : ""
            }`}
          >
            Overview
          </Button>
          <Button
            onClick={() => setContentType("education")}
            styles={`text-sm text-[#0060F0] bg-[#E2EEFF] rounded-full px-4 py-2 ${
              contentType === "education"
                ? "border-[0.1rem] border-[#0060F0]"
                : ""
            }`}
          >
            Education
          </Button>
          <Button
            onClick={() => setContentType("experience")}
            styles={`text-sm text-[#0060F0] bg-[#E2EEFF] rounded-full px-4 py-2 ${
              contentType === "experience"
                ? "border-[0.1rem] border-[#0060F0]"
                : ""
            }`}
          >
            Work Experience
          </Button>
          <Button
            onClick={() => setContentType("projects")}
            styles={`text-sm text-[#0060F0] bg-[#E2EEFF] rounded-full px-4 py-2 ${
              contentType === "projects"
                ? "border-[0.1rem] border-[#0060F0]"
                : ""
            }`}
          >
            Projects
          </Button>
        </div>
      </div>
      {contentType === "overview" && (
        <div
          className="flex lg:flex-row flex-col justify-evenly bg-[rgba(226,238,255,0.5)] 
      p-6 rounded-lg mt-2 w-[93%] mx-auto"
        >
          <ImageBoxes />
          <Details />
        </div>
      )}
      <div className="w-[100%] mx-auto flex lg:flex-row flex-col-reverse items-start justify-between">
        {contentType === "projects" && <Projects />}
        {contentType === "overview" && <Overview />}
        {contentType === "education" && <Education />}
        {contentType === "experience" && <WorkExperience />}
        <About />
      </div>
      <GoogleFooter />
    </div>
  );
};

export default Content;
