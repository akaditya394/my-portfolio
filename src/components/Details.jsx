import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { faCakeCandles } from "@fortawesome/free-solid-svg-icons";

const Details = () => {
  return (
    <div className="hidden md:grid grid-cols-2 gap-2 lg:w-[40%] w-[80%] mx-auto mt-3">
      <div
        className="rounded-lg bg-[#E2EEFF] flex flex-col
  items-start gap-8 p-3 min-w-fit"
      >
        <p className="text-lg text-[#2A4165]">
          <FontAwesomeIcon icon={faTwitter} /> Twitter
        </p>
        <p className="text-sm text-[#2A4165]">@UnsolicitedGyan</p>
      </div>
      <div
        className="rounded-lg bg-[#E2EEFF] flex flex-col
  items-start gap-8 p-3 min-w-fit"
      >
        <p className="text-lg text-[#2A4165]">
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </p>
        <p className="text-sm text-[#2A4165]">github.com/akaditya394</p>
      </div>
      <div
        className="rounded-lg bg-[#E2EEFF] flex flex-col
  items-start gap-8 p-3 min-w-fit"
      >
        <p className="text-lg text-[#2A4165]">
          <FontAwesomeIcon icon={faInstagram} /> Instagram
        </p>
        <p className="text-sm text-[#2A4165]">@akadiitya2020</p>
      </div>
      <div
        className="rounded-lg bg-[#E2EEFF] flex flex-col
  items-start gap-8 p-3 min-w-fit"
      >
        <p className="text-lg text-[#2A4165]">
          <FontAwesomeIcon icon={faCakeCandles} /> Age
        </p>
        <p className="text-sm text-[#2A4165]">21</p>
      </div>
    </div>
  );
};

export default Details;
