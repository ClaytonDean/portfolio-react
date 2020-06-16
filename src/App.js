import React from "react";
import Home from "./components/pages/home";
import Portfolio from "./components/pages/portfolio";
import Contact from "./components/pages/contact";
// import Resume from "./components/pages/resume";
// import Nav from "./components/Nav"; 
// import Jumbotron from "./components/Jumbotron"; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
    
      <Switch>
      
        <Route exact path="/" component ={Home} />
        <Route exact path="/portfolio" component ={Portfolio} />
        <Route exact path="/contact" component ={Contact} />
      
      </Switch>
    </Router>
  );
}

export default App;
