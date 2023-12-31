import React from "react";
import { cClass } from "../../class";

export const Hero = () => {
  return (
    <div
      className={`hero-sec ${cClass.mainSection} ${cClass.flexItemsCenter} h-[100vh]`}
    >
      <div className="hero-overlay  px-main_x">
        <div className="hero-overlay-part-one"></div>
        <div className="hero-overlay-part-two"></div>
      </div>
      <div className="hero-content px-main_x">
        <h1 className="herohead text-primary-500 font-two">GYM FIT</h1>
        <h4>NEW YOU DEAL</h4>

        <button className={`${cClass.buttonTwo} w-fit`}>Deal Now</button>
      </div>

      <div className="hero-bottom font-bold">
        <h4>DECIDE.</h4>
        <h4>COMMITE.</h4>
        <h4>SUCCEED.</h4>
      </div>
    </div>
  );
};
