import { useReducer, useState } from "react"
export default function SCounter(){
const [count,setCount]=useState(0);
const [state,dispatch]=useReducer(reducer,0)
function reducer(state,action){
    if(action.type=="Incremeant")
    {
    return state+action.payload;
    }
    if(action.type=="Decremeant")
    {
        return state-action.payload;
    }
}
return <div>

    Use-State:{count}
    <button onClick={()=>setCount(count+1)} >Incease</button>
    <button onClick={()=>setCount(count-1)}>Decrease</button>
    <br/>
    Use_reducer:{state}
    <button onClick={()=>dispatch({type:"Incremeant",payload:1})} >Incease</button>
    <button onClick={()=>dispatch({type:"Decremeant",payload:1})}>Decrease</button>
    </div>
    
}