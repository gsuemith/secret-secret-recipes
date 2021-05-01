import React from "react";
import { Link, useHistory } from "react-router-dom";

const Intro = () => {
  // Links to register and login not loading on first try with link tags or history.push
  // let history = useHistory();

  // const pushToLogin = () => {
  //   history.push("/login");
  // };

  return (
    <section id="one">
      <header className="major">
        <h2>
          Anyone can go out and buy a cookbook,
          <br />
          but you want a place to store all your
          <br />
          secret family recipes, handed down
          <br />
          from generation to generation.
        </h2>
      </header>
      <p>
        The little cards grandma wrote her recipes on in her beautiful cursive
        are getting lost or are hard to read. You need somewhere secure to keep
        my recipes with me forever!
      </p>
      <ul className="actions">
        {" "}
        <li>
          <Link className="button" to="/register">
            Register Here
          </Link>
        </li>{" "}
        <li>
          <Link className="button primary" to="/login">
            Log In
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Intro;
