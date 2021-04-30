import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./routes/home/Home";
import Login from "./routes/users/Login"
import Register from "./routes/users/Register"

function App() {
  return (
    <Switch>
      {/**<PrivateRoute to="/account/:id" /> */}
      {/**<PrivateRoute to="/recipes/add" /> */}
      {/**<PrivateRoute to="/recipes/:id/edit" /> */}
      {/**<Route to="/recipes/:id" /> */}
      {/**<Route to="/recipes" /> */}
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/" component={Home}/>
    </Switch>
  );
}

export default App;
