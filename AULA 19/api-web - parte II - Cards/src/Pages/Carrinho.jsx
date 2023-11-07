import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


function Carrinho(){
    const {id} = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/produtos/"+id)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

    return(
        <>
       <div>
        <h2>teste de renderização</h2>
        <img src={data.img} style={{ width: "150px", height: "150px" }}/><br />
        <h3>Nome do produto</h3>
        {data.nome} <br />
        <h3>Valor do produto</h3>
        R$ {data.valor},00
       </div>
        </>
    )
}
export default Carrinho