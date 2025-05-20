import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "../Pages/Start";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import OTPVerification from "../Pages/OtpVerification";
import HomeProtector from "../Pages/HomeProtector";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route
          path="/home"
          element={
            <HomeProtector>
              <Home />
            </HomeProtector>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp" element={<OTPVerification />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
