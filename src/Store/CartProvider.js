import React,{useState} from 'react'
import CartContext from './CartContext'

function CartProvider(props) {
    const [items, setItems] = useState([]);

    const addItemToCartHandler = (item) => {
        setItems([...items,item]);
        console.log('inside addItemToCartHandle', CartContext);
    }


    const removeItemFromCartHandler = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    const cartContext = {
        items:items,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
        
    }
  return (
    <CartContext.Provider value={cartContext}>
        {console.log('inside CartContextProvider', CartContext)}
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider