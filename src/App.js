import React from 'react';
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";

import {
  Route,Switch
} from "react-router-dom";
import Home from "./components/Home";
import Stuff from "./components/Stuff";
import Contact from "./components/Contact";
import Routes from "./routes";

import configureStore, { history } from "./appRedux/store";

import BlogContainer from "./containers/BlogContainer";
import CategoryContainer from "./containers/CategoryContainer";
import Systems from "./components/App/Systems";

export const store = configureStore();

function App() {
  return (
   <Provider store={store}>
     <ConnectedRouter history={history}>
       <div className="container">
         <Routes/>
         <div className="content">
           <Switch>
             <Route exact path="/" component={Home}/>
             <Route path="/stuff" component={Stuff}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/news" component={BlogContainer}/>
             <Route exact path="/all-categories" component={CategoryContainer}/>
             <Route exact path="/all-categories/:id/:title" component={Systems}/>
           </Switch>
         </div>
       </div>
     </ConnectedRouter>
   </Provider>
  );
}

export default App;
