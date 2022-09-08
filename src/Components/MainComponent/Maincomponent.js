import React from 'react'
import './MainComponent.css'
// import '/home/mahesh/ReactJs/fooddelivaryapp/src/Components/MainComponent/MainComponent.css'
import MenuBar from '../MenuBar/MenuBar'
import Statement from '../Statement/Statement'
import Fooditem from '../Fooditem/Fooditem'

const fooddata=[
  {
    id:"e1",
    title:"Suchi",
    details:"Finest fish and veggies",
    price:"520"
  },
  {

    id:"102",
    title:"Schinitzel",
    details:"A german specialty!",
    price:"330"
  },

  {

    id:"103",
    title:"Barbecue",
    details:"American,raw,meaty",
    price:"425"
  },

  {

    id:"104",
    title:"Green Bowl",
    details:"Healthy...and green...",
    price:"175"
  }];

const Maincomponent = () => {
  return (
    <div className="maincomponent">
        <MenuBar/>
        <Statement/>
        <Fooditem data={fooddata}></Fooditem>

    </div>
  )
}

export default Maincomponent