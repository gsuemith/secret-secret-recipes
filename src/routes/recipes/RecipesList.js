import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router'

import AddRecipe from './components/AddRecipe'
const RecipesList = () => {
  let { path } = useRouteMatch()
  return (
  <>
  <h2>A treasure trove of good food!</h2>
  <Switch>
    <Route path={`${path}/add`} component={AddRecipe}/>
    <Route path={path} >
      <h3>List of recipes coming soon</h3>
    </Route>
  </Switch>
  </>
  )
}

export default RecipesList



