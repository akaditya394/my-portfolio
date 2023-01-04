import React from "react";
import ResultItem from "./ResultItem";

const WorkExperience = () => {
  return (
    <div className="mt-10 mb-5 flex flex-col gap-10 lg:w-[55%] w-[80%] mx-auto">
      <ResultItem
        link="https://www.linkedin.com/company/reverr?originalSubdomain=in"
        title="Web Development Intern (July'22 - Oct'22) | Reverr"
        description="Reverr Founders Web App.Converting Figma designs to React code, authentication, API integrations and connecting the React frontend with the Firebase backend.
        Founders could sign up through this website and book an online meet with mentors and industry experts of their choice. Dedicated profile page for every founder. 
        Founders could register their startups and get it verified by Reverr."
        subtext="July'22 - Oct'22"
      />
    </div>
  );
};

export default WorkExperience;
