import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'

const URL = process.env.REACT_APP_API_URL

const initialFormValues = {
  username: "",
  password: "",
}

const Login = () => {

  const [formValues, setFormValues ] = useState(initialFormValues)

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

  const onSubmit = e => {
    e.preventDefault();
    submit()
  }

  const onChange = event => {
    const { name, value } = event.target

    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  return (
    <section>
      <h2> Login to your secret secret acccount </h2>
      
        
        <form onSubmit={onSubmit} id="login-form">
          <div className="row gtr-uniform gtr-50">
          <div className="col-6 col-12-xsmall">
            <input type="text" onChange={onChange} value={formValues.username} name="username" id="username" placeholder="Username" />
          </div>
         
          <div className="col-6 col-12-xsmall">
            <input type="password"  onChange={onChange} value={formValues.password} name="password" id="password" placeholder="Password" />
          </div>
          </div>
        </form>
        
        <ul className="actions">
          <li><input type="submit" value="Log In" className="primary" form="login-form"/></li>
        </ul>
      
    </section>
  )
}

export default Login
