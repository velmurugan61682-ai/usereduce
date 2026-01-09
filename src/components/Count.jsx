import { useReducer } from "react"
const initialvalue=0
function Reducer (count,action){
  switch(action.type){
    case"increamemt":
    return count+1
    case"decrement":
    return count-1
    case"reset":
    return  initialvalue
    default:
      return count

  }
  
}



const Count = () => {
  const [count, dispatch]=useReducer(Reducer,initialvalue)
  return (

   <>
   <h1>count:{count}</h1>
   <button onClick={()=>dispatch( { type:"increamemt"})}>increamemt</button>
   <button onClick={()=>dispatch( { type:"decrement"})}>decrement</button>
   <button onClick={()=>dispatch( { type:"reset"})}>reset</button>
   
   
   </>
  )
}

export default Count