import React from "react";
import GoogleFooter from "./GoogleFooter";
import ResultItem from "./ResultItem";

const Overview = () => {
  return (
    <div className="mt-10 mb-5 flex flex-col gap-10 lg:w-[55%] w-[80%] mx-auto">
      <ResultItem />
      <ResultItem />
      <ResultItem />
      <ResultItem />

      <GoogleFooter />
    </div>
  );
};

export default Overview;
