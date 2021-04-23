import React from "react";
import "./App.css";
import About from "./About";
import Shop from "./Shop";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route ,Link} from "react-router-dom";

const User = ({match})=>{

  return (
    <h1>User {match.params.username}</h1>
  )
}

function App() {
  return (
    <Router>
      <div className ='App'>

      <ul>
        <li>
        <Link to ="/">Home</Link>
        </li>
        <li>
        <Link to ="/about">About</Link>
        </li>
        <li>
        <Link to ="/user/ashish">Ashish</Link>
        </li>
        <li>
        <Link to ="/about/pandey">pandey</Link>
        </li>
        
      </ul>
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
