import React from "react";
import { cClass } from "../../class";
import AboutImg from "../../assets/images/about.jpg";

const aboutClass = `w-full h-[700px] overflow-hidden`;
const imageOverlay = `absolute w-full h-full opacity-100 z-10`;
const aboutContent = `absolute w-full h-full z-20 flex flex-row justify-between gap-4 left-0 top-0 px-main_x`;
const imagePart = `overflow-hidden w-[50%] h-full basis-[30%] relative`;
const contentPart = `overflow-hidden w-[50%] h-full basis-[40%] flex flex-col gap-8 items-center  p-12`;

export const About = () => {
  return (
    <div className={`about-sec ${aboutClass} ${cClass.mainSection}`}>
      <div className="about-overlay"></div>
      <div className={`${aboutContent}`}>
        {/* content part  */}
        <div className={`about-content-part-overlay ${contentPart}`}>
          <h2 className="text-primary-500">About Us</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            reprehenderit magnam sint amet culpa quis veniam quae quos odio
            deserunt harum, consectetur quaerat illo ipsum nam, non iste fugit
            esse!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            reprehenderit magnam sint amet culpa quis veniam quae quos odio
            deserunt harum, consectetur quaerat illo ipsum nam, non iste fugit
            esse!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            reprehenderit magnam sint amet culpa quis veniam quae quos odio
            deserunt harum, consectetur quaerat illo ipsum nam, non iste fugit
            esse!
          </p>
        </div>
        {/* img  */}
        <div className={`about-img ${imagePart}`}>
          <div className={`about-image-overlay ${imageOverlay}`}></div>
          <img
            className="w-full h-full object-cover object-top block"
            src={AboutImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
