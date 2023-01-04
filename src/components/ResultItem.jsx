import React from "react";

const ResultItem = (props) => {
  return (
    <div className="flex flex-col items-start gap-1">
      <p className="text-sm text-[#202124]">
        <a href={props.link}>{props.link}</a>
      </p>
      <p
        className="text-xl text-[#1a0dab] hover:underline 
      hover:underline-offset-3 cursor-pointer"
      >
        <a href={props.link}>{props.title}</a>
      </p>
      <p className="text-md text-[#4d5156]">{props.description}</p>
      <p className="text-sm text-[#70757a]">{props.subtext}</p>
    </div>
  );
};

export default ResultItem;
