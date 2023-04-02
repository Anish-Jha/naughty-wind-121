import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Login_Signup/Pages/Login";
import Signup from "../Login_Signup/Pages/Signup";
import Checkout from "../Checkout/Page/Checkout";

const Mainroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
};

export default Mainroutes;
