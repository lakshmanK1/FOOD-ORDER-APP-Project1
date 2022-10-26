import React from 'react'
import classes from './MainMealsItemList.module.css'

function MainMealsItemList(props) {
  return (
    <li className={classes.meal}>
        <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{`Rs: ${props.price}`}</div>
        </div>
    </li>
  )
}

export default MainMealsItemList