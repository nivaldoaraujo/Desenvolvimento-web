
import './App.css'
import Condicional from './Condicional/Condicional'
import Contador from './Contador/Contador'
import Email from './Email/Email'
import States from './UseEstado/States'

function App() {
  

  return (
    <>
      <Condicional />
      <br />
      <p>useStates</p>
      <States />
      <p>Email</p>
      <Email />
      <p>contador</p>
      <Contador />
    </>
  )
}

export default App
