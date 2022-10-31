import React,{useContext, useState} from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../Store/CartContext'

function Cart(props) {
    // const [cartItem, setCartItem] = useState([]);
    // const [quantity, setQuantity] = useState();
    const cartCntx = useContext(CartContext);

    const cartItemDecrementHandler =(id)=>{
        // cartCntx.removeItem(cartItem => cartItem.map((item)=>id === item.id ? {...item, Quantity:item.Quantity-1} : item
        // ));
    console.log(id,'---------id')
    cartCntx.removeItem(id);
    }

    // const cartItemIncrementHandler = (id) => {
    //     cartCntx.addItem(cartItems => cartItems.map((items)=>id === items.id ? {...items, Quantity:items.Quantity+1} : items
    //     ));
    // }


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
            <button onClick={()=>cartItemDecrementHandler(item.id)}>-</button>
            <button onClick={item.onAdd}>+</button>
        </div>
        </li>
    ))
    }</ul>

    const prices = cartCntx.items.map((item) => item.price);
    const quantity = cartCntx.items.map((quan) => quan.Quantity);
    let total = 0;
    for (var i = 0; i < prices.length; i++) {
    total += prices[i] * quantity[i];
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