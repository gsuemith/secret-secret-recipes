import React, { useEffect, useState } from 'react'

const Register = () => {

  const [form, setForm] = useState({
      
  })

  const register = e => {
    e.preventDefault();
    console.log('register!')
  }

  return (
   

    
  <section>
    <h2>Create an Account!</h2>
    
        
        <form id="register-form" onSubmit={register}>
          <div className="row gtr-uniform gtr-50">
            <div className="col-6 col-12-xsmall"><input type="text" name="name" id="name" placeholder="Name" /></div>
            <div className="col-6 col-12-xsmall"><input type="text" name="email" id="name" placeholder="Email" /></div>
            <div className="col-6 col-12-xsmall"><input type="text" name="password" id="name" placeholder="Password" /></div>
            <div className="col-6 col-12-xsmall"><input type="text" name="confirm_password" id="name" placeholder="Confirm Password" /></div>
            
          </div>
          
        </form>
        <ul className="actions">
          <li>
            <input type="submit" value="Submit" className="primary" form="register-form"/>
          </li>
        </ul>
  </section>
   
  )
}

export default Register
