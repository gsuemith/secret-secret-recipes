import React, { useState, useEffect } from 'react'
import RecipesList from '../RecipesList'
import Ingredients from './Ingredients'

const initialState = {
  "title": "",
  "image_url": "/images/recipes/default.jpg",
  "source": "",
  "user_id": 1,
  "categories": [],
  "description": "",
  "ingredients": [
    {
      "name": "water",
      "quantity": 2,
      "unit": "cups"
    }
  ],
  "steps": [
    {
      "step_number": 1,
      "instructions": "Put water in microwave safe container and heat on high for 5 minutes or until boiling."
    }
  ]
}

const AddRecipe = () => {
	const [ recipe, setRecipe ] = useState(initialState)
	const [ categories, setCategories ] = useState(["one", "two", "three"])
	const [ sources, setSources ] = useState(["four", "five", "six"])

	return (
		<section>
		<section>
		<h2>Add your secret recipe</h2>
		
			<form id="recipe-form">
				<div className="row gtr-uniform gtr-50">
					<div className="col-12">
						<input
							type="text"
							name="title"
							id="title"
							placeholder="Recipe Title"
							autoComplete="title"
						/>
					</div>
					<div className="col-5 col-11-xsmall">
						<input
							list="categories"
							name="category"
							id="category"
							placeholder="Choose a Category"
							autoComplete="category"
						/>
					</div>
					<div className="col-1">
						<a href="\#" className="icon solid fa-plus">
							<span class="label">label</span>
						</a>
					</div>
					<div className="col-6 col-12-xsmall">
						<input
							list="sources"
							name="source"
							id="source"
							placeholder="Source"
							autoComplete="source"
						/>
					</div>
					<div className="col-12">
						<textarea 
							name="description"
							id="description"
							placeholder="Description"
						/>
					</div>
				</div>
			</form>
			<div className="row">
				<div className="col-6 col-12-small">
					<Ingredients ingredients={recipe.ingredients}/>
				</div>
				<div className="col-6 col-12-small">
					<h3>Instructions</h3>
					<ol>
						{
							recipe.steps.map(step => <li><p>{step.instructions}</p></li>)
						}
					</ol>
					<form>
      			<div className="row gtr-uniform gtr-50">
							<div className="col-4">
								<input type="submit" value="Add Step" className="button small"/>
							</div>
							<div className="col-12">
								<textarea placeholder="Instructions"/>
							</div>
						</div>
					</form>
				</div>
			</div>
			<ul className="actions">
				<li>
					<input type="submit" value="Submit Recipe" form="recipe-form" className="primary"/>
				</li>
			</ul>
		</section>
			<datalist id="categories">
				{categories.map(category => <option value={category} key={category}/>)}
			</datalist>
			<datalist id="sources">
				{sources.map(source => <option value={source} key={source}/>)}
			</datalist>
		</section>
	)
}

export default AddRecipe
