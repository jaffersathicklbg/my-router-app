import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
     
        <BrowserRouter>
          <div> 
            <Navigation></Navigation>
            <Switch>
              <Route path="/" component={Home} exact  ></Route>
              <Route path="/About" component={About}></Route>
              <Route path="/Contact" component={Contact}></Route>
              <Route component={Error}></Route>
            </Switch>
          </div>
        </BrowserRouter>


      
    );
  }
}

export default App;
