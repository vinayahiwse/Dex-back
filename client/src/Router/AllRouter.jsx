import React from "react";
import { Route, Routes } from "react-router-dom";

import Token from "../pages/Token";
import Home from "../pages/Home";

export default function AllRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tokens" element={<Token />} />
      </Routes>
    </>
  );
}
