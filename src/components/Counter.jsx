import { useState } from "react"
export default function Counter(){
const [count,setCount]=useState(0);
const [addiion,addtwo]=useState(1);
function add2(){
    addtwo(addiion-3)
}
function add1(){
    addtwo(addiion+1)
}
function add(){
    setCount(count+addiion)
}
function sub(){
    setCount(count-addiion)
}
return <div>
    <h1>Count is:{count}</h1>
    <button onClick={add} >Incease</button>
    <button onClick={sub}>Decrease</button>
    <h1>Counter increase by{addiion}</h1>
    <button onClick={add1}>Increase</button>
    <button onClick={add2}>Decrese</button>
    </div>
    
}