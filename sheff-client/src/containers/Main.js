import React from "react";
import {Switch, Route, withRouter, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Homepage from "../components/Homepage";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

const Main = props => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" render={props => <Homepage {...props}/>}/>
        <Route exact path="/gallery" render={props => <Gallery{...props}/>}/>
        <Route exact path="/contactus" render={props => <Contact{...props}/>}/>
      </Switch>
    </div>
  );
};

export default Main;
