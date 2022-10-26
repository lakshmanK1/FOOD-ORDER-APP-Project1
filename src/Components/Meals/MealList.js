import React from 'react'

function MealList(props) {
  return (
    <div>
        <ul>
            {props.menuItems.map((food)=>(
                <li key={food.id}>{food.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default MealList