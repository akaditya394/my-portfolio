import React from "react";
import Button from "./Button";
import OfferedIn from "./OfferedIn";
import SearchInput from "./SearchInput";

const GoogleSearch = () => {
  return (
    <div className="flex flex-col justify-around items-center">
      <img src={require("../assets/images/googleLogo.png")} alt="logo" />
      <SearchInput />
      <div className="flex flex-row gap-2">
        <Button styles="rounded-md text-sm bg-[#f8f9fa] px-4 py-2">
          Google Search
        </Button>
        <Button styles="rounded-md text-sm bg-[#f8f9fa] px-4 py-2">
          I'm Feeling Lucky
        </Button>
      </div>
      <OfferedIn />
    </div>
  );
};

export default GoogleSearch;
