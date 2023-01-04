import React from "react";
import Content from "../components/Content";
import Footer from "../components/Footer";
import ResultsSearch from "../components/ResultsSearch";

const Results = () => {
  return (
    <div className="flex flex-col relative">
      <ResultsSearch />
      <Content />
      <Footer />
    </div>
  );
};

export default Results;
