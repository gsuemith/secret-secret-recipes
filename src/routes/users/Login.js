import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'

const URL = process.env.REACT_APP_API_URL

const initialFormValues = {
  username: "",
  password: "",
};

const Login = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [loginFail, setLoginFail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { push } = useHistory()
  
  const submit = () => {
    axios
    .post(`${URL}/api/auth/login`, formValues)
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      push("/");
    })
    .catch(err => {
      console.log(err.message)
    })
  }

  const onSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    axios
      .post(
        "https://tt16-secret-recipes.herokuapp.com/api/auth/login",
        formValues
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        props.history.push("/");
        setIsLoading(false);
      })
      .catch((err) => {
        setLoginFail(true);
        setIsLoading(false);
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
                    autoComplete="username"
                  />
                </div>
              </div>
              <div className="row gtr-uniform gtr-50">
                <div className="col-6 col-12-xsmall">
                  <input
                    type="password"
                    onChange={onChange}
                    value={formValues.password}
                    name="password"
                    id="password"
                    placeholder="Password"
                    autoComplete="current-password"
                  />
                </div>
              </div>
              <ul className="actions">
                <li>
                  <input type="submit" value="Log In" />
                </li>
              </ul>
            </form>
            {isLoading && (
              <p style={{ color: "blue", textAlign: "center" }}>
                {" "}
                LOADING....{" "}
              </p>
            )}
            {loginFail && (
              <p style={{ color: "red" }}>
                {" "}
                Sorry, that login didnt work. Please try again.{" "}
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
