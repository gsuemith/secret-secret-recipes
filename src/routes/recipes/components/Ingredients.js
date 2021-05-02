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
          <span onClick={e => console.log('x')} className="icon solid fa-times" style={{cursor: "pointer"}}></span>
        </tr>))
      }
      </tbody>
    </table>
    <form>
      <div className="row gtr-uniform gtr-50">
        <div className="col-4">
          <input type="submit" value="Add Ingredient" className="button small"/>
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
