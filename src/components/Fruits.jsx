export default function Fruits(){
    const fruit=[
        {name:"Apple",rate:'30',soldout:"true"},
        {name:"Kiwi",rate:'3',soldout:"false"},
        {name:"grapes",rate:'3',soldout:"false"},
        {name:"mangos",rate:'3',soldout:"false"},
    ]
    

    
    return <div>{fruit.map(fit=><ul><li key={fruit.name}>{fit.name}${fit.rate} {fit.soldout}</li></ul>)}</div>;
}
