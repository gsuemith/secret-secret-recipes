import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router'

import AddRecipe from './components/AddRecipe'
const RecipesList = () => {
  let { path } = useRouteMatch()
  return (
  <>
  <h2>A treasure trove of good food!</h2>
  <Switch>
    <Route path="/recipes/add" component={AddRecipe}/>
    <Route path="/recipes" >
      List of recipes coming soon
    </Route>
  </Switch>
  </>
  )
}

export default RecipesList



