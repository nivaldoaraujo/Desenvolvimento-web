import { useState } from "react";

const States = () => {
    const [islogado, setisLogado] = useState(false);
    if(!islogado)
     return(
             <div>
                <p>Você pode ver essa mensagem de estiver LOGADO!</p>
                <button onClick={() => setisLogado(true)}>Log in</button>
             </div>
                         
         );
     return(
        
        <div>
            <p>Seu saldo é de R$ 500,00</p>
            <button onClick={() => setisLogado(false)}>Log iOut</button>
        </div>
             
     );
     
   }
   
   export default States