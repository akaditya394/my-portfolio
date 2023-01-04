import {
  Bars3Icon,
  MagnifyingGlassIcon,
  NewspaperIcon,
  PhotoIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import Navbar from "./Navbar";
import SearchInput from "./SearchInput";

const ResultsSearch = () => {
  return (
    <div className="border-b-2">
      <div className="flex flex-row gap-2 justify-between items-center pt-5 mb-5">
        <a href="/">
          <img
            src={require("../assets/images/googleLogo.png")}
            alt="logo"
            className="ml-5 md:h-10 md:block hidden"
          />
        </a>
        <SearchInput />
        <Navbar styles="hidden md:flex" />
      </div>
      <div className="flex flex-row gap-2 justify-evenly w-[70%] mx-auto py-4 items-center">
        <p className="cursor-pointer text-sm flex flex-row items-center gap-1 text-blue-400">
          <MagnifyingGlassIcon className="h-4 w-4" />
          All
        </p>
        <p className="text-[#70757a] cursor-pointer text-sm flex flex-row items-center gap-1">
          <NewspaperIcon className="h-4 w-4" />
          News
        </p>
        <p className="text-[#70757a] cursor-pointer text-sm flex flex-row items-center gap-1">
          <PhotoIcon className="h-4 w-4" />
          Images
        </p>
        <p className="text-[#70757a] cursor-pointer text-sm flex flex-row items-center gap-1">
          <PlayIcon className="h-4 w-4" />
          Videos
        </p>
        <p className="text-[#70757a] cursor-pointer text-sm flex flex-row items-center gap-1">
          <Bars3Icon className="h-4 w-4" />
          More
        </p>
      </div>
    </div>
  );
};

export default ResultsSearch;
