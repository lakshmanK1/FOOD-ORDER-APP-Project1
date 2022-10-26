import React from 'react'
import SummaryCard from '../UI/SummaryCard'
import classes from './SummaryText.module.css'

function SummaryText() {
  return (
    <SummaryCard>
        <div className={classes.summaryHeader}>
        <h1>Delicious Food, Delivered To You</h1>
        </div>
        <div className={classes.summaryText}>
            <p>choose your favourite meal from our broad selection of available meals and
             enjoy a delicious lunch or dinner at home</p>
             <p>All our meals are cooked with high quality ingredients, 
                just-in-time and ofCourse by experienced chef's</p>
        </div>
    </SummaryCard>
  )
}

export default SummaryText