import React from "react";
import Button from "./Button";
import { Bars4Icon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <div
      className=" flex flex-row items-center gap-4 justify-end 
    pt-5 px-4"
    >
      <p className="text-sm">Gmail</p>
      <p className="text-sm">Images</p>
      <Bars4Icon className="h-6 w-6 cursor-pointer" />
      <Button styles="text-sm bg-[#1a73e8] py-2 px-5 text-white rounded-[0.3rem]">
        Sign In
      </Button>
    </div>
  );
};

export default Navbar;
