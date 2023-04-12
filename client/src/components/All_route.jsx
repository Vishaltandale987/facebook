import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin_login from "../pages/Admin_login";
import Admin_signup from "../pages/Admin_signup";
import Home from "../pages/Home";
import Message from "../pages/Message";
import Notification from "../pages/Notification";
import Profile from "../pages/Profile";
import User_login from "../pages/User_login";
import User_signup from "../pages/User_signup";

function All_route() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/message" element={<Message />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/notification" element={<Notification />}></Route>
        <Route path="/adminLogin" element={<Admin_login />}></Route>
        <Route path="/adminSignup" element={<Admin_signup />}></Route>
        <Route path="/userLogin" element={<User_login />}></Route>
        <Route path="/userSignup" element={<User_signup />}></Route>
      </Routes>
    </div>
  );
}

export default All_route;
