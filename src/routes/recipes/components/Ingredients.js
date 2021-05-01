import React from 'react'

const Ingredients = ({ ingredients }) => {
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
        </tr>))
      }
      </tbody>
    </table>
  </div>
  )
}

export default Ingredients
