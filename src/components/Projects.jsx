import React from "react";
import ResultItem from "./ResultItem";

const Projects = () => {
  return (
    <div className="mt-10 mb-5 flex flex-col gap-10 lg:w-[55%] w-[80%] mx-auto">
      <ResultItem
        link="https://reliable-zuccutto-8cd4f5.netlify.app/"
        title="Web3 Crowdfunding Web Application"
        description="Crowdfunding Web Application (React.js, Tailwind CSS, Thirdweb, Vite)"
        subtext="Dec'22"
      />
      <ResultItem
        link="https://github.com/akaditya394/aalekha"
        title="Aalekha"
        description="MERN(MongoDB, Express, React, Node) Stack Journaling Application"
        subtext="Dec'22"
      />
      <ResultItem
        link="https://github.com/akaditya394/instagram-clone"
        title="Instagram Clone"
        description="Instagram 2.0 with REACT.JS! (Next.js, Tailwind CSS, Firebase v9, NextAuth, Recoil)"
        subtext="Jun'22"
      />
      <ResultItem
        link="https://github.com/akaditya394/reddit-clone"
        title="Reddit Clone"
        description="Reddit 2.0 with NEXT.JS! (React, SQL, Supabase, StepZen, GraphQL, TypeScript,Tailwind)"
        subtext="Jun'22"
      />
      <ResultItem
        link="https://github.com/akaditya394/twitter-clone"
        title="Twitter Clone"
        description="Twitter 2.0 with REACT.JS! (Next.js, Sanity CMS, Typescript, SSR, Tailwind & NextAuth)"
        subtext="Jun'22"
      />
      <ResultItem
        link="https://github.com/akaditya394/netflix_clone"
        title="Netflix Clone"
        description="Netflix Clone using React.js"
        subtext="May'22"
      />
    </div>
  );
};

export default Projects;
