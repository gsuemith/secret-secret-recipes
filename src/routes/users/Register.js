import React, { useEffect, useState } from 'react'

const Register = () => {

  const [form, setForm] = useState({
      
  })

  return (
    <div id="main">

    
    <section>
      <h2>Create an Account!</h2>
      <div className="row">
        <div className="col-8 col-12-small">
          
          <form>
            <div className="row gtr-uniform gtr-50">
              <div className="col-6 col-12-xsmall"><input type="text" name="name" id="name" placeholder="Name" /></div>
              <div className="col-6 col-12-xsmall"><input type="text" name="email" id="name" placeholder="Email" /></div>
              <div className="col-6 col-12-xsmall"><input type="text" name="password" id="name" placeholder="Password" /></div>
              <div className="col-6 col-12-xsmall"><input type="text" name="confirm_password" id="name" placeholder="Confirm Password" /></div>
              
            </div>
            
          </form>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Register
