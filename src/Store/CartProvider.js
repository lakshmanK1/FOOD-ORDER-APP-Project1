import React,{useState} from 'react'
import CartContext from './CartContext'

function CartProvider(props) {
    const [items, setItems] = useState([]);

    const addItemToCartHandler = (item) => {
        setItems([...items,item]);
        console.log('inside addItemToCartHandle', cartContext);
    }

    let totalAmount = 0;
    totalAmount += items.price * items.Quantity;
    const removeItemFromCartHandler = () => {}

    const cartContext = {
        items:items,
        totalAmount:totalAmount,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler,
        
    }
  return (
    <CartContext.Provider value={cartContext}>
        {console.log('inside CartContextProvider', cartContext)}
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider