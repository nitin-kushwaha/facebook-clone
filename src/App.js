import React, { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";

import Navbar from "./Components/Navbar";


import Logout from "./Components/Logout";
import Home from "./Components/Home";
import Setting from "./Components/Setting";
import Profile from "./Components/Profile";
import Page from "./Components/Page";
import Groups from "./Components/Groups";
import Friends from "./Components/Friends";
import SimpleContainer from "./Components/Photo";
import Privacy from "./Components/Privacy";
import Videos from "./Components/Videos";
const App = () => {
  return (
    <>
      <Routes>
      <Route path='logout' element={<Logout/>} />
        <Route path='dashboard' element={<Page />}>
          <Route path='home' element={<Home />} />
          <Route path='navbar' element={<Navbar />} />
          <Route path='setting' element={<Setting />} />
          <Route path="simplecontainer" element={<SimpleContainer />} />
          <Route path="privacy" element={<Privacy/>} />
          <Route path="videos" element={<Videos />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
