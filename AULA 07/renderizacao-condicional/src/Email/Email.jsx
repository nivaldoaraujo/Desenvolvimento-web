import { useState } from "react"
function Email()
{
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()
    function enviarEmail(e)
    {
        e.preventDefault()
        setUserEmail(email)
        //console.log("Testando envio de e-mail")
        console.log(userEmail)
    }
    function limparEmail(e)
    {
        setUserEmail('') 
    }

    return(
        <div>
            <h2>Cadastre seu E-mail</h2>
            <form >
                <input type="email" placeholder="Seu e-mail aqui!" 
                onChange={(e) => setEmail(e.target.value)} />
                <button type="submit" onClick={enviarEmail}>Enviar E-mail</button>
                {/* {userEmail} */}
                {userEmail &&(
                    <div >
                        <p>O e-mail do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar!!</button>
                    </div>
                )}
            </form>
        </div>
    )
}
export default Email