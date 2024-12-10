import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";
import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home";
import SignUpPage from "./components/SignUp";
import LoginPage from "./components/Login";
import Reward from "./components/Reward";

const App = () => {
  return (
    <Router>
      <div className="">
        <NavBar />
        <Routes>
          <Route path="/reward" Component={Reward}></Route>
          <Route path="/login" Component={LoginPage}></Route>
          <Route path="/signup" Component={SignUpPage}></Route>
          <Route path="/" Component={HomePage}></Route>
        </Routes>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
