import React from "react";
import Router from './router'
// import Dashboard from './pages/Dashboard'
// import User from './pages/User'
// import Adduser from "./pages/Adduser";

import {HashRouter, Route, Switch, Redirect} from'react-router-dom'

function App() {
  return <Router/>

    // <div className="App">
    //     <HashRouter>
    //         <Switch>
    //             <Route path="/dashboard" component={Dashboard} />
    //             <Route path="/user" component={User} />
    //             <Route path="/adduser" component={Adduser} />
    //             <Route exact path="/" component={Main} />
    //             <Redirect to="/home"/>
    //         </Switch>
    //     </HashRouter>
    // </div>

}

export default App;
