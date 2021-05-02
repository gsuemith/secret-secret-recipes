import React, { useState, useEffect } from "react";

import axiosWithAuth from '../../users/validation/axiosWithAuth'

import AddStep from "./AddStep";
import Ingredients from "./Ingredients";

const initialState = {
  title: "",
  image_url: "/images/recipes/default.jpg",
  source: "",
  user_id: 1,
  categories: [],
  description: "",
  ingredients: [
    // {name: "water", quantity: 2, unit: "cups"}
  ],
  steps: [
    // {
    //   step_number: 1,
    //   instructions: "Put water in microwave safe container."
    // }
  ],
};

const URL = process.env.REACT_APP_API_URL

const AddRecipe = () => {
  const [recipe, setRecipe] = useState(initialState);
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [sources, setSources] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      let res
      try {
        res = await axiosWithAuth()
          .get(`${URL}/api/categories`)
        setCategories(res.data)
        
        res = await axiosWithAuth()
          .get(`${URL}/api/sources`)
        setSources(res.data)
        
        res = await axiosWithAuth()
          .get(`${URL}/api/ingredients`)
        setIngredients(res.data)
      } catch (err) { console.log(err) }
    }

    apiCall()
  }, [])

  const addCategory = () => {
    if (recipe.categories.find(category => category === newCategory)){
      return setNewCategory('')
    }
    setRecipe({ 
      ...recipe, 
      categories: [...recipe.categories, newCategory]
    })
    setNewCategory('')
  }

  const handleChange = e => {
    const { name, value } = e.target
    if (name === 'category'){
      return setNewCategory(value)
    }
    setRecipe({ ...recipe, [name]: value })
  }

  const submitRecipe = e => {
    e.preventDefault();
    axiosWithAuth().post(`${URL}/api/recipes`, recipe)
    .then(res => console.log(res))
  }
  
  return (
    <section>
      <section>
        <h2>Add your secret recipe</h2>
        {
          recipe.categories.length > 0 &&
          <h4>Categories: {recipe.categories.join(", ")}</h4>
        }
        <form id="recipe-form" onSubmit={submitRecipe}>
          <div className="row gtr-uniform gtr-50">
            <div className="col-12">
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Recipe Title"
                autoComplete="title"
                value={recipe.title}
                onChange={handleChange}
              />
            </div>
            <div className="col-5 col-11-xsmall">
              <input
                list="categories"
                name="category"
                id="category"
                placeholder="Choose a Category"
                autoComplete="category"
                value={newCategory}
                onChange={handleChange}
              />
            </div>
            <div className="col-1" style={{display:"flex", alignItems:"center"}}>
              <span 
                className="icon solid fa-plus add-category"
                onClick={addCategory}
              >
              </span>
            </div>
            <div className="col-6 col-12-xsmall">
              <input
                list="sources"
                name="source"
                id="source"
                placeholder="Source"
                autoComplete="source"
                value={recipe.source}
                onChange={handleChange}
              />
            </div>
            <div className="col-12">
              <textarea
                name="description"
                id="description"
                placeholder="Description"
                value={recipe.description}
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-6 col-12-small">
            <AddStep recipe={recipe} update={setRecipe}/>
          </div>
          <div className="col-6 col-12-small">
            <Ingredients recipe={recipe} update={setRecipe} suggestions={ingredients}/>
          </div>
        </div>
        <ul className="actions">
          <li>
            <input
              type="submit"
              value="Submit Recipe"
              form="recipe-form"
              className="primary"
            />
          </li>
        </ul>
      </section>
      <datalist id="categories">
        {categories.map((category) => (
          <option value={category} key={category} />
        ))}
      </datalist>
      <datalist id="sources">
        {sources.map((source) => (
          <option value={source} key={source} />
        ))}
      </datalist>
    </section>
  );
};

export default AddRecipe;
