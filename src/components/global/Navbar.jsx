import React from "react";
import { NavLink } from "react-router-dom";
// classes
const menu = `menu flex items-center gap-4`;
export const Navbar = () => {
  return (
    <div className={`${menu}`}>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/membership"}>Membership</NavLink>
      <NavLink to={"/traning"}>Traning</NavLink>
      <NavLink to={"/classes"}>Classes</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/contact"}>Contact</NavLink>
    </div>
  );
};
