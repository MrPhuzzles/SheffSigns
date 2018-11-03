import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class Navbar extends Component {
  render(){
    return(
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="/">Home</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="aboutus">About Us <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="gallery">What We've Done</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contactus">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
    )
  }
}

export default Navbar;
