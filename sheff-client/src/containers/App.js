import React, { Component } from 'react';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./Navbar";

const App = () => (
  <Router>
  <div>
    <Navbar />
  </div>
  </Router>
);

export default App;
