import React from "react";
import Footer from "../components/Footer";
import GoogleSearch from "../components/GoogleSearch";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-start">
      <Navbar styles="pt-5" />
      <GoogleSearch />
      <Footer />
    </div>
  );
};

export default Home;
