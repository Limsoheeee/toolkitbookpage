import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import Main from "../pages/Main";
import App from "../App";
import Header from "../components/Header";


function Router() {
  return (   
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      {/* <Route path="/" element={<Header/>} /> */}
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/detail/" element={<Detail />} />
    </Routes>
    </BrowserRouter>

  );
};
export default Router;