export default function Message(){
    function Clicked(){
        console.log("button has been clicked")
    }
    return(
        <div><button onClick={Clicked()} >CLick</button></div>
    
    )
}