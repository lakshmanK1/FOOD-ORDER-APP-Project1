import React from 'react'
import Card from '../UI/Card'
import classes from './MealList.module.css'
import MainMealsItemList from './MainMealsItemList'

function MealList(props) {
  return (
    <section className={classes.meals}>
    <Card>
        <ul>
            {props.menuItems.map((food)=>(
                <MainMealsItemList id={food.id} key={food.id} name={food.name} 
                description={food.description} price={food.price}/>
             ))}
        </ul>
    </Card>
    </section>
  )
}

export default MealList