import React from 'react'

const Favorites = () => {
  return (
    <section id="two">
						<h2>Our Favorite Recipes</h2>
						<div className="row">
							<article className="col-6 col-12-xsmall work-item">
								<a href="images/fulls/01.jpg" className="image fit thumb"><img src="images/thumbs/01.jpg" alt="" /></a>
								<h3>Magna sed consequat tempus</h3>
								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
							</article>
							<article className="col-6 col-12-xsmall work-item">
								<a href="images/fulls/02.jpg" className="image fit thumb"><img src="images/thumbs/02.jpg" alt="" /></a>
								<h3>Ultricies lacinia interdum</h3>
								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
							</article>
							<article className="col-6 col-12-xsmall work-item">
								<a href="images/fulls/03.jpg" className="image fit thumb"><img src="images/thumbs/03.jpg" alt="" /></a>
								<h3>Tortor metus commodo</h3>
								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
							</article>
							<article className="col-6 col-12-xsmall work-item">
								<a href="images/fulls/04.jpg" className="image fit thumb"><img src="images/thumbs/04.jpg" alt="" /></a>
								<h3>Quam neque phasellus</h3>
								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
							</article>
							<article className="col-6 col-12-xsmall work-item">
								<a href="images/fulls/05.jpg" className="image fit thumb"><img src="images/thumbs/05.jpg" alt="" /></a>
								<h3>Nunc enim commodo aliquet</h3>
								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
							</article>
							<article className="col-6 col-12-xsmall work-item">
								<a href="images/fulls/06.jpg" className="image fit thumb"><img src="images/thumbs/06.jpg" alt="" /></a>
								<h3>Risus ornare lacinia</h3>
								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
							</article>
						</div>
						<ul className="actions">
							<li><a href="/recipes" className="button">More Recipes</a></li>
						</ul>
					</section>
  )
}

export default Favorites
