import { createContext, useState } from "react";
import Home from "./components/Home"
import Login from "./components/Login"
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import './App.css';


function App() {
  
  
  const[isLogged, setIsLogged] = useState(false)

  return (
    <BrowserRouter>
    <nav>
      <Link to={"/login"}>Se connecter | </Link>
      <Link to={"/"}>Homepage</Link>
    </nav>
    <Switch>
      <Route exact path="/login" component={Login}/>
      <Route exact path ="/" component={Home}/>
    </Switch>
    
    </BrowserRouter>
  );
}

export default App;
