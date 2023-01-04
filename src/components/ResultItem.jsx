import React from "react";

const ResultItem = () => {
  return (
    <div className="flex flex-col items-start gap-1">
      <p className="text-sm text-[#202124]">
        https://github.com/akaditya394/aalekha
      </p>
      <p
        className="text-xl text-[#1a0dab] hover:underline 
      hover:underline-offset-3 cursor-pointer"
      >
        Aalekha - MERN Stack Journaling Application
      </p>
      <p className="text-md text-[#4d5156]">
        Ex aute ex anim aliqua amet adipisicing eiusmod irure cillum ex anim et
        exercitation. Consequat enim non quis adipisicing. Nostrud ea consequat
        do irure et Lorem. Dolor irure minim elit ad cupidatat eu voluptate esse
        ex. Voluptate aliquip ad mollit exercitation proident magna id elit
        labore veniam elit eu Lorem. Elit veniam dolor est ipsum ullamco nisi in
        ea.
      </p>
      <p className="text-sm text-[#70757a]">Jul 7, 2022 - Jul 7, 2022</p>
    </div>
  );
};

export default ResultItem;
