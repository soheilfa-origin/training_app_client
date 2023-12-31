import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export const TemplateOne = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
