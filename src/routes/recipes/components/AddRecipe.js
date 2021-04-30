import React, { useState, useEffect } from 'react'

const initialState = {

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
