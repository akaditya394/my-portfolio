import React from "react";
import {
  CameraIcon,
  MagnifyingGlassIcon,
  MicrophoneIcon,
} from "@heroicons/react/24/solid";

const SearchInput = () => {
  return (
    <div
      className="flex flex-row items-center justify-between rounded-full 
    border-[1.5px] w-[90%] md:w-[45%] px-4 py-2"
    >
      <div className="w-[5%]">
        <MagnifyingGlassIcon className="hidden lg:block h-5 w-5" />
      </div>
      <input
        value="Best developer in the world"
        className="border-none outline-none w-[85%]"
      />
      <div className="flex flex-row justify-around items-center w-[10%]">
        <MicrophoneIcon className="hidden lg:block h-5 w-5" />
        <CameraIcon className="hidden lg:block h-5 w-5" />
      </div>
    </div>
  );
};

export default SearchInput;
