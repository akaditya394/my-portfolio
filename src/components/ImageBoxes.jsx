import React from "react";

const ImageBoxes = () => {
  return (
    <div className="w-[90%] lg:w-[60%] mx-auto">
      <div className="flex lg:flex-row flex-col">
        <img
          src={require("../assets/images/aditya4.jpg")}
          alt="adityakumar"
          className="object-contain h-[20rem] lg:h-[25rem] rounded-lg"
        />
        <div className="xl:flex lg:flex-col hidden">
          <img
            src={require("../assets/images/aditya1.jpg")}
            alt="adityakumar"
            className="object-contain h-[10rem] lg:h-[12.5rem] rounded-lg"
          />
          <img
            src={require("../assets/images/aditya3.jpg")}
            alt="adityakumar"
            className="object-contain h-[10rem] lg:h-[12.5rem] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageBoxes;
