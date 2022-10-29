import React,{useContext} from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../Store/CartContext'

function Cart(props) {
    const cartCntx = useContext(CartContext);
    const cartItems =<ul className={classes.cartItems}>{cartCntx.items.map((item)=>(
        <li key={item.id} className={classes.cartItemInner}>
        <div>
            <h2>{item.name}</h2>
            <div className={classes.summary}>
                <span className={classes.price}>Rs: {item.price}</span>
                <span className={classes.quantity}>x{item.Quantity}</span>
            </div>
        </div>
        <div className={classes.actions}>
            <button>+</button>
            <button>-</button>
        </div>
        </li>
    ))
    }</ul>

    const prices = cartCntx.items.map((item) => item.price);
    let total = 0;
    for (var i = 0; i < prices.length; i++) {
    total += prices[i];
    }

  const totalAmount = parseInt(total);

  return (
    <Modal>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{`Rs: ${totalAmount}`}</span>
        </div>

        <div className={classes.actions}>
            <button className={classes.buttonAlt} onClick={props.onHideCart}>close</button>
            <button className={classes.button}>order</button>
        </div>
    </Modal>    
 
  )
}

export default Cart