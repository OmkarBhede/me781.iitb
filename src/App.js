import axios from "axios";
import React, { useState } from "react";
import { FaEye, FaLock, FaUserAlt } from "react-icons/fa";

import Select from "react-select";
import makeAnimated from "react-select/animated";
import { toast } from "react-toastify";
import ResultsCards from "./ResultsCards";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserInfoCard from "./UserInfoCard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserInfoCard></UserInfoCard>}></Route>
        <Route path="/results" element={<ResultsCards></ResultsCards>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
