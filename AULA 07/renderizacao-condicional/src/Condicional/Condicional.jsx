
const Condicional = () => {
   const islogado = true;
   if(!islogado)
    return(
            <p>Você pode ver essa mensagem de estiver LOGADO!</p>
        )
    return(
        <div>
            <p>Seu saldo é de R$ 500,00</p>
        </div>
    )
    
  }
  
  export default Condicional