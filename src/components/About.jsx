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
        Currently pursuing a B.Tech in Computer Science and Engineering at the
        Indian Institute of Information Technology, Sonepat, I am on course to
        graduate in 2024. My academic journey has equipped me with a deep
        understanding of computer science principles, making me well-prepared to
        tackle challenges.
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
            link="https://reliable-zuccutto-8cd4f5.netlify.app/"
            src={require("../assets/images/thirdweblogo.jpeg")}
            time="7 July 2022"
          />
          <Item
            name="Netflix Clone"
            link="https://github.com/akaditya394/netflix_clone"
            src={require("../assets/images/netflixlogo.png")}
            time="7 July 2022"
          />
          <Item
            name="Instagram Clone"
            link="https://github.com/akaditya394/instagram-clone"
            src={require("../assets/images/instalogo.jpg")}
            time="7 July 2022"
          />
          <Item
            name="LinkedIn Clone"
            link="https://github.com/akaditya394/linkedin-clone"
            src={require("../assets/images/linkedinlogo.jpg")}
            time="7 July 2022"
          />
          <Item
            name="Aalekha"
            link="https://www.github.com/aalekha"
            src={require("../assets/images/reactlogo.png")}
            time="7 July 2022"
          />
          <Item
            name="Twitter Clone"
            link="https://www.github.com/twitter-clone"
            src={require("../assets/images/twitter.png")}
            time="7 July 2022"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
