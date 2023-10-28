import axios from "axios"
import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.min.css';

function GetApi(){
    //variaveis de estado
    const [valor, setValor] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/produtos")
        .then(res => setValor(res.data))
        .catch(err => console.log(err))
    }, [])
    return(
        
    <div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "15px"}}>
        {
            valor.map((d, i) => (
                <Card key={i} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={d.img} />
                    <Card.Body>
                        <Card.Title>Produtos</Card.Title>
                        <Card.Text>
                            {d.nome}
                        </Card.Text>
                        <Card.Text>
                            {d.detalhes}
                        </Card.Text>
                        <Card.Text>
                            {d.valor}
                        </Card.Text>
                        <Button variant="primary">Comprar</Button>
                    </Card.Body>
                </Card>
            ))
        }
        </div>
    </div>
    
        
    )
}

export default GetApi

