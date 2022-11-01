import React, { useContext,  useState} from "react";
import CartContext from "../../Store/CartContext";
import Modal from '../UI/Modal'
import classes from "./Cart.module.css";

const Cart = (props) => {
  const [cartItem, setCartItem] = useState([]);
  const [quantity, setQuantity] = useState();
  const cartcntx = useContext(CartContext);

  const cartItemDecrementHandler = (id) => {
   cartcntx.removeItem(id);
   setCartItem(cartItem => 
      cartItem.map((item) => id === item.id ? {...item, Quantity:item.Quantity - 1}:item
      )
    );
  };

  const cartItemIncrementHandler = (id) => {
    // setQuantity(qty);
    cartcntx.addItem(cartItems => 
        cartItems.map((items) => id === items.id ? {...items, Quantity:items.Quantity + 1}:items
        )
    );  
    // setCartItem(cartItems => 
    //   cartItems.map((items) => id === items.id ? {...items, quantity:items.quantity + 1}:items
    //   )
    // );
  };

  const cartItems = (
    <ul className={classes.cartItems}>
      {cartcntx.items.map((item) => (
        <li className={classes.cartItemInner}>
          <div>
            <h2>{item.name}</h2>
            <div className={classes.summary}>
              <span className={classes.price}>Rs: {item.price}</span>
              <span className={classes.quantity}>x {item.Quantity}</span>
            </div>
          </div>
          <div className={classes.actions}>
            <button onClick={() => cartItemDecrementHandler(item.id)}>-</button>
            <button onClick={() => cartItemIncrementHandler(parseInt(item.id))}>+</button>
          </div>
        </li>
      ))}
    </ul>
  );

  const prices = cartcntx.items.map((item) => item.price);
  const Totalquantity = cartcntx.items.map((item) => item.Quantity);
  let total = 0;
  for (var i = 0; i < prices.length; i++) {
    total += prices[i] * Totalquantity[i];
  }

  const totalAmount = parseInt(total.toFixed(2));

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>Rs: {totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.buttonAlt} onClick={props.onHideCart}>
          Close
        </button>
        <button className={classes.button} onClick={props.onHideCart}>
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
