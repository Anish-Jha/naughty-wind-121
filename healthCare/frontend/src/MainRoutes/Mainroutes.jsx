import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Login_Signup/Pages/Login";
import Signup from "../Login_Signup/Pages/Signup";

const Mainroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" elemen={<Signup />} />
      </Routes>
    </>
  );
};

export default Mainroutes;
