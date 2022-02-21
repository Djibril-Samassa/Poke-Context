import logo from './logo.svg';
import Home from "./components/Home"
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path ="/" component={Home}/>
    </Switch>
    
    </BrowserRouter>
  );
}

export default App;
