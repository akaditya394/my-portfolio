import React from "react";
import Button from "./Button";
import OfferedIn from "./OfferedIn";
import SearchInput from "./SearchInput";
import { useNavigate } from "react-router-dom";

const GoogleSearch = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-start items-center gap-6 mt-16">
      <img
        src={require("../assets/images/googleLogo.png")}
        alt="logo"
        className="object-contain"
      />
      <SearchInput />
      <div className="flex flex-row gap-2">
        <Button
          onClick={navigate("/adityakumar")}
          styles="rounded-md text-sm bg-[#f8f9fa] px-4 py-2"
        >
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
