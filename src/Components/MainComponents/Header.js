import React from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './Header.module.css'
import FoodMeals from '../../Assets/meals.jpg'


function Header() {
  return (
    <React.Fragment>
    <header className={classes.headerCMP}>
        <div className={classes.siteName}>
          <a href='#'><h1>ReactMeals</h1></a>  
        </div>

            <button className={classes.cartBTN}>
            <span className={classes.carticon}><CartIcon/></span>
            <span className={classes.cartText}>Your Cart</span>
            <span className={classes.cartNUM}><strong>0</strong></span>
            </button>
    
    </header>

    <div className={classes.headerIMG}>
        <img src={FoodMeals}/>
    </div>
    </React.Fragment>
  )
}

export default Header