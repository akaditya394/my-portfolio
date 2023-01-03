import React from "react";
import Navbar from "./Navbar";
import SearchInput from "./SearchInput";

const ResultsSearch = () => {
  return (
    <div>
      <div className="flex flex-row gap-2 justify-between items-center pt-5">
        <img
          src={require("../assets/images/googleLogo.png")}
          alt="logo"
          className="ml-5 md:h-10 md:block hidden"
        />
        <SearchInput />
        <Navbar styles="hidden md:flex" />
      </div>
    </div>
  );
};

export default ResultsSearch;
