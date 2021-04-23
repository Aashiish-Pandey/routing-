import React, {useState} from "react";
import "./App.css";
import About from "./About";
import Shop from "./Shop";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route ,Link,NavLink,Redirect} from "react-router-dom";

const User = ({username})=>{

 return (
    <h1>User {username}</h1>
  )
}

function App() {

  var [loggedIn,setloggedIn] = useState(false)

  let loginHandler = ()=> {

    setloggedIn(prevLoggedIn=>!prevLoggedIn)
  }



  return (
    <Router>
      <div className ='App'>

        <h1>{loggedIn}</h1>

      <ul>
        <li>
        <NavLink to ="/" exact activeStyle ={{
          color:"red"
        }}>Home</NavLink>
        </li>
        <li>
        <NavLink to ="/about" exact activeStyle ={{
          color:"red"
        }}>About</NavLink>
        </li>
        <li>
        <NavLink to ="/user/ashish" exact activeStyle ={{
          color:"red"
        }}>Ashish</NavLink>
        </li>
        <li>
        <NavLink to ="/about/pandey" exact activeStyle ={{
          color:"red"
        }}>pandey</NavLink>
        </li>
        
      </ul>
        <input type = "button" value = {loggedIn? "logout" :"login"}onClick ={()=>loginHandler()} />
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

        <Route path = "/user/:username" exact render = {({match})=> (

          loggedIn? <User username = {match.params.username}/> : <Redirect to = "/" />
        )

        }/>
      </div>
    </Router>
  );
}






export default App;
