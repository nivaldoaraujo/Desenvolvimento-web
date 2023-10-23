import { useEffect, useState } from "react"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';

function  ApiUser(){
//
const [valor, setValor] = useState([])
useEffect(() => {
    axios.get("http://localhost:3000/usuarios")
    .then(res => setValor(res.data))
    .catch(err => console.log(err))
})


    return(
        <>
        <div className="container mt-5">
            <table className="table" >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                    </tr>
                </thead>
            </table>
            <tbody>
                    {
                    valor.map((d, i) => (
                    <tr key={i}>
                    <td>{d.id}</td>
                    <td>{d.nome}</td>
                    <td>{d.email}</td>
                    </tr>
                    ))
                    }

            </tbody>
        </div>
        </>
    )
}
export default ApiUser