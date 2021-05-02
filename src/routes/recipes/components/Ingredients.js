import React, { useState } from 'react'

const initialForm = {
  name: "", quantity: 0, unit: ""
}

const Ingredients = ({ recipe, update }) => {
  const { ingredients } = recipe;
  const [ form, setForm ] = useState(initialForm)

  const remove = (name) => {
    update({
      ...recipe,
      ingredients: ingredients.filter(ingredient => {
        return ingredient.name !== name
      })
    })
  }

  const add = ingredient => {
    update({
      ...recipe,
      ingredients: [...ingredients, ingredient]
    })
  }

  return (
  <div class="table-wrapper">
    <h3>Ingredients</h3>
    <table>
      <thead>
        <th>Ingredient</th>
        <th>Qty.</th>
        <th>Unit</th>
      </thead>
      <tbody>
      {
        ingredients.map(({name, quantity, unit}) => (
        <tr>
          <td>{name}</td>
          <td>{quantity}</td>
          <td>{unit}</td>
          <span onClick={() => remove(name)} className="icon solid fa-times" style={{cursor: "pointer"}}></span>
        </tr>))
      }
      </tbody>
    </table>
    <form id="new-ingredient-form">
      <div className="row gtr-uniform gtr-50">
        <div className="col-4">
          <input form="new-ingredient-form" type="submit" value="Add Ingredient" className="button small"/>
        </div>
        <div className="col-12">
          <input type="text" placeholder="Ingredient Name"/>
        </div>
        <div className="col-6 col-12-small">
          <input type="number" placeholder="Quantity"/>
        </div>
        <div className="col-6 col-12-small">
          <input list="unit" placeholder="Unit"/>
        </div>
      </div>
    </form>
  </div>
  )
}

export default Ingredients
