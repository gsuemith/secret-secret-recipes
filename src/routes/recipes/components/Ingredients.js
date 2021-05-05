import React, { useState } from 'react'

const initialForm = {
  name: "", quantity: "", unit: ""
}

const Ingredients = ({ recipe, update, suggestions }) => {
  const { ingredients } = recipe;
  const [ form, setForm ] = useState(initialForm)
  const [isAdding, setIsAdding] = useState(true)

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

  const changeHandler = e => {
    const { name, value } = e.target
    setForm({ ...form, [name]:value })
  }

  const submitHandler = e => {
    e.preventDefault()
    if(!isAdding){
      setIsAdding(true)
      return
    }
    add(form)
    setForm(initialForm)
    setIsAdding(false)
  }

  return (
  <div className="table-wrapper">
    <h3>Ingredients</h3>
    <table>
      <thead>
        <tr>
          <th>Ingredient</th>
          <th>Qty.</th>
          <th>Unit</th> 
        </tr>
        
      </thead>
      <tbody>
      {
        ingredients.map(({name, quantity, unit}, idx) => (
        <tr key={idx}>
          <td>{name}</td>
          <td>{quantity}</td>
          <td>{unit}</td>
          <td><span onClick={() => remove(name)} className="icon solid fa-times remove" style={{cursor: "pointer"}}></span></td>
        </tr>))
      }
      </tbody>
    </table>
    <form id="new-ingredient-form" onSubmit={submitHandler}>
      <div className="row gtr-uniform gtr-50">
        {isAdding && <>
          <div className="col-12">
            <input list="suggestions" placeholder="Ingredient Name" onChange={changeHandler} name="name" value={form.name}/>
          </div>
          <datalist id="suggestions">
            {
              suggestions.map(ingredient => (
                <option value={ingredient} key={ingredient}/>
              ))
            }
          </datalist>
          <div className="col-6 col-12-small">
            <input type="number" step=".1" placeholder="Quantity" onChange={changeHandler} name="quantity" value={form.quantity}/>
          </div>
          <div className="col-6 col-12-small">
            <input list="unit" placeholder="Unit" onChange={changeHandler} name="unit" value={form.unit}/>
          </div>
        </>}
        <div className="col-4">
          <input form="new-ingredient-form" type="submit" value={`${isAdding ? 'Add':'New'} Ingredient`} className="button small"/>
        </div>
      </div>
    </form>
  </div>
  )
}

export default Ingredients
