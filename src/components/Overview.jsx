import React from "react";
import ResultItem from "./ResultItem";

const Overview = () => {
  return (
    <div className="mt-10 mb-5 flex flex-col gap-10 lg:w-[55%] w-[80%] mx-auto">
      <ResultItem
        link="https://www.github.com/akaditya394"
        title="Aditya Kumar"
        description="I'm pursuing B. Tech in Computer Science and Engineering at Indian Institute of Information Technology, Sonepat. I've been learning Web Development for the past 2 years. I've worked on technologies like MERN, NextJS, Redux, Firebase, Supabase, GraphQL, Stepzen and Sanity CMS. I'm keen to learn more."
        subtext="IIITS CSE'24"
      />
    </div>
  );
};

export default Overview;
