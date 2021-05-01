import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./routes/home/components/Footer";
import Header from "./routes/home/components/Header";

import Home from "./routes/home/Home";
import RecipesList from "./routes/recipes/RecipesList";
import Login from "./routes/users/Login"
import Register from "./routes/users/Register"

function App() {
  
  return (
    <>
    <Header/>
      <div id="main">
        <Switch>
          {/**<PrivateRoute path="/account/:id" /> */}
          {/**<PrivateRoute path="/recipes/add" /> */}
          {/**<PrivateRoute path="/recipes/:id/edit" /> */}
          {/**<Route path="/recipes/:id" /> */}
          <Route path="/recipes" component={RecipesList}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    <Footer/>
    </>
  );
}

export default App;
