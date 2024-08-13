import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ForCollege from "./Pages/ForColleges/ForCollege";
import ForSponsorbutton from "./Pages/ForSponsor_button/ForSponsorbutton";
import GetStart from "./Pages/GetStartedPage/GetStart";
import LoginPage from "./Pages/LoginPage/LoginPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forCollege" element={<ForCollege />} />
        <Route path="/forSponsors" element={<ForSponsorbutton />} />
        <Route path="/getStart" element={<GetStart />} />
        <Route path="/loginPage" element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default App;
