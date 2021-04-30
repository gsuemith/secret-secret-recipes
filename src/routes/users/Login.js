import React, { useEffect, useState } from "react";
import axios from "axios";

const initialFormValues = {
  username: "",
  password: "",
};

const Login = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "assets/js/main.js";
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://tt16-secret-recipes.herokuapp.com/api/auth/login",
        formValues
      )
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        props.history.push('/')
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <div id="main">
      <section>
        <h2> Login to your secret secret account </h2>
        <div className="row">
          <div className="col-8 col-12-small">
            <form onSubmit={onSubmit} method="post" action="#">
              <div className="row gtr-uniform gtr-50">
                <div className="col-6 col-12-xsmall">
                  <input
                    type="text"
                    onChange={onChange}
                    value={formValues.username}
                    name="username"
                    id="username"
                    placeholder="Username"
                  />
                </div>
              </div>
              <div className="row gtr-uniform gtr-50">
                <div className="col-6 col-12-xsmall">
                  <input
                    type="text"
                    onChange={onChange}
                    value={formValues.password}
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <ul className="actions">
                <li>
                  <input type="submit" value="Log In" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
