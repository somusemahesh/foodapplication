import { SAVE_SUCHI } from "./Constants"

export const reducer = (state= 0, action) => {
    // const inputValue=parseInt( action.payload)

    switch(action.type) {
      case 'SAVE_USER':return state =action.payload 
  
        
      default: return state
  }
}

export const productHistory=(oldProductList=[],action)=>{

  if(action.type === SAVE_SUCHI){
    return [...oldProductList,action.payload];
  }
  return oldProductList
}  
  