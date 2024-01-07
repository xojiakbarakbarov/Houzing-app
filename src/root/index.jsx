import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { navbar } from "../utils/navbar";
import HomePage from "../pages/Home";
import Navbar from '../compnents/Navbar'
const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar/>}>    
        {navbar.map(({ path,element, id }) => {
          return <Route path={path} key={id} element={element} />;
        })}
          </Route>
        <Route path="*" element={<h1>Not found 404</h1>} />
        <Route path="/" element={<Navigate to={"/home"} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
