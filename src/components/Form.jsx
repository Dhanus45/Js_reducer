import { useState } from "react"

export default function Form(){
    const [name,nameChange]=useState({FirstName:"",LastName:""})
    function handelSubmit(e){
            e.preventDefault();
            console.log(name)
    }
    
    return <div>
        {name.FirstName}-{name.LastName}
        <form >
            <input  onChange={(e)=> nameChange({...name,FirstName:e.target.value})} type="text" value={name.FirstName}/>
            <input  onChange={(e)=> nameChange({...name,LastName:e.target.value})} type="text" value={name.LastName}/>
            <button  onClick={(e)=>handelSubmit(e)}>Submit</button>
            </form>
            </div>
}