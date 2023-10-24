import { useEffect, useState } from "react"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";

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
        <div className="container "><br />
            <div className="text-end"><Link to="/criar" className="btn btn-primary">Adicionar +</Link></div>
            <table className="table" >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                    </tr>
                </thead>
           
            <tbody>
                    {
                    valor.map((d, i) => (
                    <tr key={i}>
                        <td>{d.id}</td>
                        <td>{d.nome}</td>
                        <td>{d.email}</td>
                        <td>Up/Del</td>
                    </tr>
                    ))
                    }

            </tbody>
            </table>
        </div>
        
        </>
    )
}
export default ApiUser