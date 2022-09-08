import React from 'react'
import {useDispatch} from 'react-redux'
import { store } from '../../store'
import { useState} from 'react'
import './Fooditem.css'
import FoodCard from '../UI/FoodCard'

import { saveSuchi } from './Redux/Action'

const Fooditem = (props) => {
  const [value1, setValue1] = useState(0)
  const [value2,setValue2]=useState(0)
  const [value3,setValue3]=useState(0)
  const [value4,setValue4]=useState(0)
  
  const dispatch=useDispatch();


  const totalItem=parseInt(value1)+parseInt(value2)+parseInt(value3)+parseInt(value4) 
  const handleSubmitForm= (e) => {
    
    e.preventDefault()
    store.dispatch({
      type: 'SAVE_USER',
      payload: totalItem
     })
    console.log({totalItem})
  }
    
  const handleChangeName1 = (text) => {
    setValue1(text)

  }
  
  const handleChangeName2 = (text) => {
    setValue2(text)

  }

  const handleChangeName3 = (text) => {
    setValue3(text)

  }
  

  const handleChangeName4 = (text) => {
    setValue4(text)

  }
return (
    <FoodCard className="fooditem">
      
    <form  className="foodouter" onSubmit={handleSubmitForm}>
    

        <div className='foodinner'>
        
               <div className="foodleft">
          
                
                <h3 className="fooddescription">{props.data[0].title}</h3>
                <p className="fooddescription foodname">{props.data[0].details}</p>
                <h3 className="fooddescription price">{props.data[0].price}</h3> 
                
              </div>
               <div className="foodright">
                  <div className="amount">
                  <h1>Amount</h1>
                  <input 
                  type="number" 
                  className="inputnumber"
                  onChange = {e => handleChangeName1(e.target.value)}
                 /><br/>
                  
                  </div>
                  <button
                  // onClick={()=>dispatch(saveItem(dummyitem1))} 
                  onClick={()=>dispatch(saveSuchi(totalItem,value1,props.data[0].title,props.data[0].price))}
                  
                  type="submit"
                  className="addbutton"
                  >+ Add</button>
              </div>
               
      </div>
      <div className='foodinner'>
        
                  
                
              <div className="foodleft">
          
                
                <h3 className="fooddescription">{props.data[1].title}</h3>
                 <p className="fooddescription foodname">{props.data[1].details}</p>
                <h3 className="fooddescription price">{props.data[1].price}</h3> 
                
              </div>
               <div className="foodright">
                  <div className="amount">
                  <h1>Amount</h1>
                  <input 
                  type="number" 
                  className="inputnumber"
                  onChange = {e => handleChangeName2(e.target.value)}/><br/>
                  
                  </div>
                  <button
                  onClick={()=>dispatch(saveSuchi(totalItem,value2,props.data[1].title,props.data[1].price))}
                  type="submit" 
                  className="addbutton"
                  >+ Add</button>
              </div>
               
      </div>
      <div className='foodinner'>
        
                  
                
              <div className="foodleft">
          
                
                <h3 className="fooddescription">{props.data[2].title}</h3>
                 <p className="fooddescription foodname">{props.data[2].details}</p>
                <h3 className="fooddescription price">{props.data[2].price}</h3> 
                
              </div>
               <div className="foodright">
                  <div className="amount">
                  <h1>Amount</h1>
                  <input 
                  type="number" 
                  className="inputnumber"
                  onChange = {e => handleChangeName3(e.target.value)}/><br/>
                  
                  </div>
                  <button 
                  onClick={()=>dispatch(saveSuchi(totalItem,value3,props.data[2].title,props.data[2].price))}
                  type="submit" 
                  className="addbutton"
                  >+ Add</button>
              </div>
               
      </div>
      <div className='foodinner'>
        
                  
                
              <div className="foodleft">
          
                
                <h3 className="fooddescription">{props.data[3].title}</h3>
                 <p className="fooddescription foodname">{props.data[3].details}</p>
                <h3 className="fooddescription price">{props.data[3].price}</h3> 
                
              </div>
               <div className="foodright">
                  <div className="amount">
                  <h1>Amount</h1>
                  <input 
                  type="number" 
                  className="inputnumber"
                  onChange = {e => handleChangeName4(e.target.value)}/><br/>
                  </div>
                  <button
                  onClick={()=>dispatch(saveSuchi(totalItem,value4,props.data[3].title,props.data[3].price))}
                    
                  type="submit" 
                  className="addbutton"
                  >+ Add</button>
              </div>
               
      </div>
      


   

    
    
    </form>
  
    </FoodCard>
  
  )
}

export default Fooditem