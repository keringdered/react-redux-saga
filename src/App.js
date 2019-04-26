import React from 'react';
import {
  Route,
  NavLink,
  HashRouter,Switch
} from "react-router-dom";
import Home from "./components/Home";
import Stuff from "./components/Stuff";
import Contact from "./components/Contact";
function App() {
  return (
    <HashRouter>
        <div className="container">
          <h1>{process.env.REACT_APP_NAME} SPA</h1>
          <ul className="header">
            <li><NavLink to="/" >Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/stuff" component={Stuff}/>
              <Route path="/contact" component={Contact}/>
            </Switch>
          </div>
        </div>
      </HashRouter>
  );
}

export default App;
