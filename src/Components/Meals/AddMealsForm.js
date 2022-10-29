import React,{useContext} from 'react'
import classes from './AddMealsForm.module.css'
import Input from '../UI/Input'
import CartContext from '../../Store/CartContext'

function AddMealsForm(props) {
    const cartCntx = useContext(CartContext);
    console.log('re-initializing', cartCntx);

    const addItemToCart = (event) => {
        event.preventDefault();
        const quantity = document.getElementById('amount'+props.id).value;
        cartCntx.addItem({...props.item, Quantity:quantity})
        console.log('after AddItemToCart', cartCntx);
    }

  return (
        <form className={classes.form}>
            {console.log('inside render', cartCntx.items)}
            <Input label='Amount' input={{
                id:'amount'+props.id,
                type:'number',
                min:'1',
                max:'6',
                step:'1',
                defaultValue:'1'
            }}/>
            <button onClick={addItemToCart}>+Add</button>
        </form>
  )
}

export default AddMealsForm