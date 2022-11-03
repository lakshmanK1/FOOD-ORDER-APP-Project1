import React, { useContext } from 'react'
import classes from './MainMealsItemList.module.css'
import AddMealsForm from './AddMealsForm'
import CartContext from '../../Store/CartContext'

function MainMealsItemList(props) {

  const cartCntx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
        <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{`Rs: ${price}`}</div>
        </div>
        <div>
          <AddMealsForm id={props.id} item={props}/>
        </div>
    </li>
  )
}

export default MainMealsItemList