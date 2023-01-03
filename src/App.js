import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/adityakumar" element={<Results />} />
    </Routes>
  );
};

export default App;
