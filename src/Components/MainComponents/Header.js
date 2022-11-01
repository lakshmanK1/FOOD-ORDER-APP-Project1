import React,{useContext} from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './Header.module.css'
import FoodMeals from '../../Assets/meals.jpg'
import CartContext from '../../Store/CartContext'


function Header(props) {
  const handleUseContext = useContext(CartContext);
  let Quantity  = 0;
  handleUseContext.items.forEach((item)=>{
    Quantity = Quantity + Number(item.Quantity);
  })
  return (
    <React.Fragment>
    <header className={classes.headerCMP}>
        <div className={classes.siteName}>
          <a href='http://localhost:3000/'><h1>ReactMeals</h1></a>  
        </div>

            <button className={classes.cartBTN} onClick={props.onShowCart}>
            <span className={classes.carticon}><CartIcon/></span>
            <span className={classes.cartText}>Your Cart</span>
            <span className={classes.cartNUM}><strong>{Quantity}</strong></span>
            </button>
    
    </header>

    <div className={classes.headerIMG}>
        <img src={FoodMeals}/>
    </div>
    </React.Fragment>
  )
}

export default Header