import React from "react";
import "./App.css";
import About from "./About";
import Shop from "./Shop";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route path = "/about" component = {About}/>
        <Route path = "/shop" component = {Shop}/>
        <Route path = "/" exact component = {Home}/>
        </Switch>
        
      </div>
    </Router>
  );
}

const Home = ()=> {

  return (
    <div>
    <h1> Home Page</h1>
  </div>
  )
}


export default App;
