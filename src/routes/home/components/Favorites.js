import React, { useEffect, useState } from 'react'
import axios from 'axios'

const URL = process.env.REACT_APP_API_URL

const Favorites = () => {
	const [recipes, setRecipes] = useState([])

	useEffect(() => {
		axios.get(`${URL}/api/recipes`)
		.then(res => {
			console.log(res.data)
			setRecipes(res.data)
		})
		.catch(err => console.log(err))
	}, [])

  return (
	<section id="two">
		<h2>Our Favorite Recipes</h2>
		<ul className="actions">
			<li><a href="/recipes" className="button">See All Recipes</a></li>
		</ul>
		<div className="row">
			{/* <article className="col-6 col-12-xsmall work-item">
				<a href="images/fulls/01.jpg" className="image fit thumb"><img src="images/thumbs/01.jpg" alt="" /></a>
				<h3>Magna sed consequat tempus</h3>
				<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
			</article> */
				recipes.map(recipe => (
					<article className="col-6 col-12-xsmall work-item" key={recipe.id}>
						<a href="images/fulls/01.jpg" className="image fit thumb">
							<img src={`${URL}${recipe.image_url}`} alt="" />
						</a>
						<h3>{recipe.title}</h3>
						<p>{recipe.description}</p>
					</article>
				))
			}
			
		</div>
		
	</section>
  )
}

export default Favorites
