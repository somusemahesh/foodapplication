import React from 'react'
import './Card.css'
 const FoodCard = (props) => {
    const classes='card ' + [props.className]
  return (
    <div className={classes}>{props.children}

    </div>
  )
  }
export default FoodCard