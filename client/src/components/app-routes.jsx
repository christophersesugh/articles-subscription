import React from "react";
import { Routes, Route } from "react-router-dom";
import Articles from "screens/articles";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Articles />} />
    </Routes>
  );
}
