import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Play from "./pages/Play";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/play/:slug" element={<Play />} />
    </Routes>
  );
};

export default AppRoutes;
