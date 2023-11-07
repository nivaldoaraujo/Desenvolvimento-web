import axios from "axios"
import { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


function GetApi() {

    const [valor, setValor] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/produtos")
        .then(res => setValor(res.data))
        .catch(err => console.log(err))
    },[] )
    return (
      <>
      <div className="container ms-6">
           
            {/* <table className="table" >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Valor</th>
                        <th>Detalhes</th>
                        <th>Foto</th>
                    </tr>
                </thead>
           
            <tbody>
                    {
                    valor.map((d, i) => (
                    <tr key={i}>
                        <td>{d.id}</td>
                        <td>{d.nome}</td>
                        <td>{d.valor}</td>
                        <td>{d.detalhes}</td>
                        <td> <img src={d.img} className="foto" /> </td>
                        
                    </tr>
                    ))
                    }

            </tbody>
            </table> */}
            <div style={{display: "flex", flexWrap: "wrap", gap: "15px"}}>
            {
             valor.map((d, i) => (
            <Card key={i} style={{ width: '18rem'}}>
            <Card.Img variant="top" src={d.img} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                {d.id}
                </Card.Text>
                <Card.Text>
                {d.nome}
                </Card.Text>
                <Card.Text>
                {d.detalhes}
                </Card.Text>
                <Card.Text>
                R$ {d.valor}
                </Card.Text>
                <Link to={`/carrinho/${d.id}`} className="btn btn-primary">Comprar</Link>
            </Card.Body>
            </Card>
            ))
            }
            </div>
        </div>
            
      </>
    )
  }
  
  export default GetApi