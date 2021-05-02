import React from 'react'

const AddStep = ({ steps }) => {
  return (
  <>
  <h3>Instructions</h3>
  <ol>
    {
      steps.map(step => (
      <li>
        <div class="row">
          <div className="col-10">
            <p>{step.instructions}</p>
          </div>
          <div className="col-2" style={{display: "flex", flexDirection:"column", alignItems:"center"}}>
            <a className="icon fa-chevron-up solid" href="\#"><span></span></a>
            <a className="icon fa-times solid" href="\#"><span></span></a>
            <a className="icon fa-chevron-down solid" href="\#"><span></span></a>
          </div>
       
        </div>
      </li>
      ))
    }
  </ol>
  <form>
    <div className="row gtr-uniform gtr-50">
      <div className="col-4">
        <input type="submit" value="Add Step" className="button small"/>
      </div>
      <div className="col-12">
        <textarea placeholder="Instructions"/>
      </div>
    </div>
  </form> 
  </>
  )
}

export default AddStep
