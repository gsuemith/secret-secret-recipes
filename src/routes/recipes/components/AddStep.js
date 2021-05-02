import React, { useState } from 'react'
import RecipesList from '../RecipesList'

const initialForm = { instructions: ""}

const AddStep = ({ recipe, update }) => {
  const { steps } = recipe
  const [form, setForm] = useState(initialForm)

  const handleChange = e => {
    const { name, value } = e.target
    setForm({...form, [name]:value})
  }

  const handleSubmit = e => {
    e.preventDefault();
    update({
      ...recipe,
      steps: [
        ...steps,
        { step_number: steps.length + 1, ...form }
      ]
    })
    setForm(initialForm)
  }

  const move = (where, stepNumber) => {
    switch(where){
      case 'up':
        if (stepNumber === 1)
          return;
        update({
          ...recipe, steps: steps.map((step, idx) => {
            const step_number = idx + 1
            if (step_number === stepNumber)
              return { ...steps[idx-1], step_number }
            if (step_number === stepNumber - 1)
              return { ...steps[step_number], step_number}
            return step
          })
        })
        break;

        case 'down':
          if (stepNumber === steps.length)
            return;
          update({
            ...recipe, steps: steps.map((step, idx) => {
              const step_number = idx + 1
              if (step_number === stepNumber)
                return { ...steps[idx+1], step_number }
              if (step_number === stepNumber + 1)
                return { ...steps[idx-1], step_number}
              return step
            })
          })
          break;

          case 'remove':
            update({
              ...recipe, 
              steps: steps.filter(step => step.step_number !== stepNumber)
                .map((step, idx) => ({...step, step_number:idx + 1}))
            })
            break;

      default:
        return
    }
  }
  return (
  <>
  <h3>Instructions</h3>
  <ol className="alt">
    {
      steps.map(({step_number, instructions}) => (
      <li>
        <div class="row">
          <div className="col-10">
            <p>{instructions}</p>
          </div>
          <div className="col-2" style={{display: "flex", flexDirection:"column", alignItems:"center"}}>
            {step_number > 1 && <span className="icon fa-chevron-up solid move" onClick={e => move('up', step_number)}></span>}
            <span className="icon fa-times solid remove" onClick={e => move('remove', step_number)}></span>
            {step_number < steps.length && <span className="icon fa-chevron-down solid move" onClick={e => move('down', step_number)}></span>}
          </div>
       
        </div>
      </li>
      ))
    }
  </ol>
  <form id="step-form" onSubmit={handleSubmit}>
    <div className="row gtr-uniform gtr-50">
      <div className="col-12">
        <textarea placeholder={`${steps.length + 1}.   And then, . . .`} name="instructions" value={form.instructions} onChange={handleChange}/>
      </div>
      <div className="col-4">
        <input type="submit" value="Add Step" className="button small" form="step-form"/>
      </div>
    </div>
  </form> 
  </>
  )
}

export default AddStep
