import React from 'react'
import classes from './Header.module.css'
import FoodMeals from '../../Assets/meals.jpg'

function Header() {
  return (
    <React.Fragment>
    <header className={classes.headerCMP}>
        <div className={classes.siteName}>
            <h1><b>ReactMeals</b></h1>
        </div>

        <div className={classes.cartData}>
            <button className={classes.cartBTN}>
             your cart &nbsp; <strong className={classes.cartNUM}>0</strong>
            </button>
        </div>
    </header>

    <div className={classes.headerIMG}>
        <img src={FoodMeals}/>
    </div>
    </React.Fragment>
  )
}

export default Header