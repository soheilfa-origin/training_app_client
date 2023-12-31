import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TemplateOne } from "./components/global/TemplateOne";
import { HomePage } from "./pages/HomePage";

export const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TemplateOne />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/membership" element={<HomePage />} />
          <Route path="/traning" element={<HomePage />} />
          <Route path="/classes" element={<HomePage />} />
          <Route path="/about" element={<HomePage />} />
          <Route path="/contact" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
};
