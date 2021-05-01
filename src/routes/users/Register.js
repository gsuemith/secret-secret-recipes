import React, { useEffect, useState } from "react";
import axios from "axios";
import * as yup from "yup";
import validationSchema from "./validation/validationSchema";

const Register = (props) => {
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [disabled, setDisabled] = useState([]);

  const postNewUser = (newUser) => {
    axios
      .post(
        "https://tt16-secret-recipes.herokuapp.com/api/auth/register",
        newUser
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        props.history.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const formSubmit = () => {
    const newUser = {
      email: form.email.trim(),
      username: form.username.trim(),
      password: form.password.trim(),
    };
    postNewUser(newUser);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    formSubmit();
  };

  const inputChange = (name, value) => {
    yup
      .reach(validationSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    inputChange(name, value);
  };

  useEffect(() => {
    validationSchema.isValid(form).then((valid) => {
      setDisabled(!valid);
    });
  }, [form]);


  return (
    
      <section>
        <h2>Create an Account!</h2>
        <div className="col-8 col-12-small">
          
            <form onSubmit={onSubmit} id="register-form">
              <div className="row gtr-uniform gtr-50">
                <div className="col-7 col-12-xsmall">
                  <input
                    type="text"
                    onChange={onChange}
                    value={form.email}
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="col-7 col-12-xsmall">
                  <input
                    type="text"
                    onChange={onChange}
                    value={form.username}
                    name="username"
                    id="username"
                    placeholder="Username"
                  />
                </div>
                <div className="col-6 col-12-xsmall">
                  <input
                    type="password"
                    onChange={onChange}
                    value={form.password}
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <div className="col-6 col-12-xsmall">
                  <input
                    type="password"
                    onChange={onChange}
                    value={form.confirmPassword}
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
              
            </form>
            <ul className="actions">
              <li>
                <input type="submit" value="Register" disabled={disabled} form="register-form"/>
              </li>
            </ul>
            <ul>
              <div>{formErrors.email.toUpperCase()}</div>
              <div>{formErrors.username.toUpperCase()}</div>
              <div>{formErrors.password.toUpperCase()}</div>
              <div>{formErrors.confirmPassword.toUpperCase()}</div>
            </ul>
        </div>
      </section>
    
  );
};

export default Register;
