import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import App from "../App";



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