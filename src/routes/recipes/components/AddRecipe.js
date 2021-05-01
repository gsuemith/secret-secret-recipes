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
			<h2>Add your secret recipe</h2>
		</section>
	)
}

export default AddRecipe
