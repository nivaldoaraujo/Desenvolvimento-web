import { useState } from "react"

function Contador()
{
    const [cont, setCont] = useState(0)
    
    const [ValueInput, setValueInput] = useState('Nivaldo')

    //let cont = 0

    const add = () =>{
        setCont(cont + 1)
        //cont = cont + 1
        console.log(cont)
    }
    const onChangeInput = (event) =>
    {
        setValueInput(event.target.value)
    }

    return (
        <div>
            <h1>Contador</h1>
            <h3>{cont}</h3>
            <button onClick={add} >Adicionar</button>
            <div>
                <input onChange={onChangeInput} ></input>
            </div>
            <h3>{ValueInput}</h3>
        </div>
    )

}
export default Contador


// let cont = 0
// const add = () =>{
//     cont = cont + 1
//     console.log(cont)
// }
// return(
//     <div>
//         <h1>Contador</h1>
//         <h3>{cont}</h3>
//         <button onClick={add} >Adicionar</button>
//     </div>
// )
