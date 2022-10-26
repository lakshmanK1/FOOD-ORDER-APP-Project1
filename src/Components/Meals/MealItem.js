import React from 'react'
import MealList from './MealList'


const foodItems = [
    {
        id:1,
        name:'Veg Biryani',
        description:'includes all veggies',
        price:250
    },
    {
        id:2,
        name:'Gobi Manchuria',
        description:'cauliflower and soya sauce',
        price:150
    },
    {
        id:3,
        name:'Aloo Parata',
        description:'paratha stuffed with potato',
        price:100
    },
    {
        id:4,
        name:'Paneer Butter Naan',
        description:'Butter naan with panner curry',
        price:300
    }
]

function MealItem() {
    
  return (
    <div>
        <MealList menuItems={foodItems}/>
    </div>
  )
}

export default MealItem