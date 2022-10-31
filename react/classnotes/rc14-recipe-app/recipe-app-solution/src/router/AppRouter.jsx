import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./../components/nav/Navbar";
import { GlobalStyles } from "../components/globalStyles/GlobalStyles";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyles />
        <Navbar />
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
