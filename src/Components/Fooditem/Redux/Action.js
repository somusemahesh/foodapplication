import { SAVE_SUCHI } from "./Constants";
// import { SAVE_BURGER } from "./Constants";
// import { SAVE_PIZZA } from "./Constants";
// import { SAVE_PAPAD } from "./Constants";
export const saveSuchi=(totalItem,noOfItem,pname,amount)=>{
    return{
        type:SAVE_SUCHI,
        payload:{
            totalItem,
           noOfItem,
           pname,
           amount,
        },
    }
}
// export const savePizza=(data)=>{
//     return{
//         type:SAVE_PIZZA,
//         payload:data
//     }
// }
// export const saveBurger=(data)=>{
//     return{
//         type:SAVE_BURGER,
//         payload:data
//     }
// }
// export const savePapad=(data)=>{
//     return{
//         type:SAVE_PAPAD,
//         payload:data
//     }
// }
