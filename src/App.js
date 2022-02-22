import { createContext, useState } from "react";
import Home from "./components/Home"
import Login from "./components/Login"
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import './App.css';

export const UserContext = createContext();

function App() {
  
  const [isLogged, setLogged] = useState(false)

  const value = {
    isLogged: isLogged,
    setLogged: setLogged,
  }



  return (
    <UserContext.Provider value={value}>
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
    </UserContext.Provider>
  );
}

export default App;
