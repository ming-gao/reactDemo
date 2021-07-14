import React from "react";
import Home from './pages/Home'
import User from './pages/User'
import Adduser from "./pages/Adduser";

import {HashRouter, Route, Switch, Redirect} from'react-router-dom'

function App() {
  return (
    <div className="App">
        <HashRouter>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/user" component={User} />
                <Route path="/adduser" component={Adduser} />
                <Route exact path="/" component={Home} />
                <Redirect to="/home"/>
            </Switch>
        </HashRouter>
    </div>
  );
}

export default App;
