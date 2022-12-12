import React from "react";
import { ToastContainer } from "react-toastify";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <>
      <AppRouter />
      <ToastContainer />
    </>
  );
};

export default App;
