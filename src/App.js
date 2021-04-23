import React from "react";
import "./App.css";
import About from "./About";
import Shop from "./Shop";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const User = ({match})=>{

  return (
    <h1>User {match.params.username}</h1>
  )
}

function App() {
  return (
    <Router>
      <div className ='App'>
        <Route path ="/" exact render = {
          ()=>{
            return(<h1>Welcome Home</h1>)
          }
        }/>
        <Route path ="/about" render = {
          ()=>{
            return(<h1>About</h1>)
          }
        }/>

        <Route path = "/user/:username" exact strict component ={User}/>
      </div>
    </Router>
  );
}






export default App;
