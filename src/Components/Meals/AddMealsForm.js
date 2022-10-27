import React from 'react'
import classes from './AddMealsForm.module.css'
import Input from '../UI/Input'

function AddMealsForm() {
  return (
        <form className={classes.form}>
            <Input label='Amount' input={{
                id:'amount',
                type:'number',
                min:'1',
                max:'6',
                step:'1',
                defaultValue:'1'

            }}/>
            <button>+Add</button>
        </form>
  )
}

export default AddMealsForm