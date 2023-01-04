import React from "react";
import Item from "./Item";

const About = () => {
  return (
    <div
      className="lg:w-[30%] w-[80%] mt-10 flex flex-col items-start gap-5 
border-l-2 p-4 mx-auto"
    >
      <p className="text-[#202124] text-xl">About</p>
      <p className="text-[#4d5156] text-md">
      Meri Ek taang nakli hai, Mai hockey ka bohoth bada khiladi tha.
Ek din Uday bhai ko meri kisi baat pe gussa aagaya aur mere he hockey se meri taang ke do tukde kar diye.
Lekin dil ke bohot ache hai, Fauran mujhe hospital le gaye aur ye nakli taang lagwayi.
      </p>
      <p className="text-[#202124] text-md">
        <span className="font-semibold">Born:</span> 4 June 2001
      </p>
      <p className="text-[#202124] text-md">
        <span className="font-semibold">Education:</span> Indian Institue of
        Information Technology
      </p>
      <div className="flex flex-col items-start w-[100%]">
        <p className="text-[#202421] text-lg font-semibold">Projects</p>
        <div className="mt-3 flex flex-row overflow-x-scroll w-[100%] gap-4">
          <Item
            name="Web3 Crowdfunding"
            src={require("../assets/images/thirdweblogo.jpeg")}
            time="7 July 2022"
          />
          <Item
            name="Netflix Clone"
            src={require("../assets/images/netflixlogo.png")}
            time="7 July 2022"
          />
          <Item
            name="Instagram Clone"
            src={require("../assets/images/instalogo.jpg")}
            time="7 July 2022"
          />
          <Item
            name="LinkedIn Clone"
            src={require("../assets/images/linkedinlogo.jpg")}
            time="7 July 2022"
          />
          <Item
            name="Aalekha"
            src={require("../assets/images/reactlogo.png")}
            time="7 July 2022"
          />
          <Item
            name="Twitter Clone"
            src={require("../assets/images/twitter.png")}
            time="7 July 2022"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
