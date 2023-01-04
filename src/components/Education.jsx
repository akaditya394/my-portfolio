import React from "react";
import ResultItem from "./ResultItem";

const Education = () => {
  return (
    <div className="mt-10 mb-5 flex flex-col gap-10 lg:w-[55%] w-[80%] mx-auto">
      <ResultItem
        link="http://www.iiitsonepat.ac.in/"
        title="Indian Institute of Informatiopn Technology, Sonepat"
        description="Indian Institute of Information Technology, Sonepat (IIIT, Sonepat) is one of the Indian Institutes of Information Technology located at Sonepat, Haryana."
        subtext="2020-2024"
      />
      <ResultItem
        link="https://www.pragatischool.edu.in/about.html"
        title="Pragati Senior Secondary School, Kota"
        description="Pragati Public Senior Secondary School is an English medium, secular co-educational school. An entity of Pragati Group of Academies, it is one of the most prestigious schools in this city. Situated in the hub of the city, the school boasts of an eco-friendly campus, which is lush with greenery. The School imbibes and echo the spirit of the city of Kota. Situated on the banks of river Chambal, Kota is an incredible fusion of the traditions of the grand medieval ages and modern technological development in the Desert State of India."
        subtext="2017-2019"
      />
      <ResultItem
        link="https://www.bdmi.org/"
        title="B.D.M. International, Kolkata"
        description="BDM International is the best CBSE co-ed English medium school in South Kolkata. We continue to maintain our reputation as the top 10 CBSE schools in ..."
        subtext="2014-2017"
      />
    </div>
  );
};

export default Education;
