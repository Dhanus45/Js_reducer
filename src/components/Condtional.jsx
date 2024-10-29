import Code from "./Code";
import Welcome from "./Welcome";

export default function Condtional(){
   let message;
   const display=false;
   {
    return display ? <Welcome/>:<Code/>
   }
    
}