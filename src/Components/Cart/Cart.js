import React from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'

function Cart() {
    const cartItems =<ul className={classes.cartItems}>{[{id:'1', name:'Fried rice', price:`Rs:${200}`,}].map((itemData)=>(
        <li key={itemData.id}>{itemData.name}</li>
    ))
    }</ul>
  return (
    <Modal>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>250</span>
        </div>

        <div className={classes.actions}>
            <button className={classes.buttonAlt}>close</button>
            <button className={classes.button}>order</button>
        </div>
    </Modal>    
 
  )
}

export default Cart