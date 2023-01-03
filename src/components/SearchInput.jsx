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
    border-2 w-[50%] px-4 py-2"
    >
      <div className="w-[5%]">
        <MagnifyingGlassIcon className="h-5 w-5" />
      </div>
      <input className="border-none outline-none w-[85%]" />
      <div className="flex flex-row justify-around items-center w-[10%]">
        <MicrophoneIcon className="h-5 w-5" />
        <CameraIcon className="h-5 w-5" />
      </div>
    </div>
  );
};

export default SearchInput;
