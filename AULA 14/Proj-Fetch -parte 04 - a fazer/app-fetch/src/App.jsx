
import './App.css'
import AppRouter from './AppRouter'
import Menu from './Componentes/Menu'
import Rodape from './Componentes/Rodape'
import AMpiUser from './Pages/ApiUser'
import Home from './Pages/Home'

function App() {

  return (
    <>
      {/* <Home /> */}
      {/* <ApiUser /> */}
      <Menu />
      <AppRouter />
      <Rodape />
    </>
  )
}

export default App
