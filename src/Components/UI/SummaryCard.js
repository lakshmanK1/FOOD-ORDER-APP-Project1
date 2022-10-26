import React from 'react'
import classes from './SummaryCard.module.css'
function SummaryCard(props) {
    let classPro = 'card' + props.className;
  return (
    <center>
    <div className={classes.classPro}>
        {props.children}   
    </div>
    </center>
  )
}

export default SummaryCard