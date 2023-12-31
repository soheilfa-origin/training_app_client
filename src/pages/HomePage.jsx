import React from "react";
import { Hero } from "../components/homeComp/Hero";
import "../styles/home.css";
import { About } from "../components/homeComp/About";

export const HomePage = () => {
  return (
    <div className="w-full">
      <Hero />
      <About />
    </div>
  );
};
