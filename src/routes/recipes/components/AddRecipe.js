import React, { useState, useEffect } from 'react'

const initialState = {
  "title": "",
  "image_url": "/images/recipes/default.jpg",
  "source": "",
  "user_id": 1,
  "categories": [],
  "description": "",
  "ingredients": [
    // {
    //   "name": "water",
    //   "quantity": 2,
    //   "unit": "cup"
    // }
  ],
  "steps": [
    // {
    //   "step_number": 1,
    //   "instructions": "Put water in microwave safe container and heat on high for 5 minutes or until boiling."
    // }
  ]
}

const AddRecipe = () => {
	const [ recipe, setRecipe ] = useState(initialState)
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
					<div className="col-6 col-12-xsmall">
						<input
							type="list"
							name="username"
							id="username"
							placeholder="Username"
							autoComplete="username"
						/>
					</div>
					<div className="col-6 col-12-xsmall">
						<input
							type="list"
							name="username"
							id="username"
							placeholder="Username"
							autoComplete="username"
						/>
					</div>
				</div>
			</form>
			<ul className="actions">
				<li>
					<input type="submit" value="Submit Recipe" form="recipe-form"/>
				</li>
			</ul>
		</section>
		</section>
	)
}

export default AddRecipe
