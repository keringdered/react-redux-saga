import React from 'react';
import {
  Route,
  NavLink,
  HashRouter,Switch
} from "react-router-dom";
import Home from "./components/Home";
import Stuff from "./components/Stuff";
import Contact from "./components/Contact";
import Routes from "./routes";
import BlogContainer from "./containers/BlogContainer";
import CategoryContainer from "./containers/CategoryContainer";
function App() {
  return (
    <HashRouter>
        <div className="container">
          <Routes/>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/stuff" component={Stuff}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/news" component={BlogContainer}/>
              <Route path="/all-categories" component={CategoryContainer}/>
            </Switch>
          </div>
        </div>
      </HashRouter>
  );
}

export default App;
