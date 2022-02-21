import logo from './logo.svg';
import Home from "./components/Home"
import Login from "./components/Login"
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <nav>
      <Link to={"/auth"}>Se connecter | </Link>
      <Link to={"/"}>Homepage</Link>
    </nav>
    <Switch>
      <Route exact path="/auth" component={Login}/>
      <Route exact path ="/" component={Home}/>
    </Switch>
    
    </BrowserRouter>
  );
}

export default App;
