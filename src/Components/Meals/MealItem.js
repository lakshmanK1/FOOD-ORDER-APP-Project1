import React from 'react'
import MealList from './MealList'

function MealItem() {
    const foodItems = [
        {
            id:1,
            name:'Veg Biryani',
            description:'Biryani which includes potato, green peas, carrot, capsicum',
            price:'Rs:250'
        },
        {
            id:2,
            name:'Gobi Manchuria',
            description:'dish made by roughly chopping and deep-frying ingredients such as cauliflower and then sautéeing it in a sauce flavored with soy sauce.',
            price:'Rs:150'
        },
        {
            id:3,
            name:'Aloo Parata',
            description:'Aloo paratha is a paratha stuffed with potato, originating from the Punjab region of South Asia.',
            price:'Rs:100'
        },
        {
            id:4,
            name:'Paneer Butter Naan',
            description:'Butter naan with yummy panner curry',
            price:'Rs:300'
        }
    ]
  return (
    <div>
        <MealList menuItems={foodItems}/>
    </div>
  )
}

export default MealItem