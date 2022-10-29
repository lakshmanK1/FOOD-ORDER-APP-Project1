import React,{useState} from 'react'
import CartContext from './CartContext'

function CartProvider(props) {
    const [items, setItems] = useState([]);

    const addItemToCartHandler = (item) => {
        setItems([...items,item]);
        console.log('inside addItemToCartHandle', cartContext);
    }


    const removeItemFromCartHandler = (id) => {
        setItems(items.filter((item) => item.id !==id));
    }

    const cartContext = {
        items:items,
        totalAmount:0,
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