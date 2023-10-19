import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Paginas/Home/Home'
import Sobre from './Paginas/Sobre/Sobre'
import Contato from './Paginas/Contato/Contato'


function AppRoutes(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }  ></Route>
                <Route path="/sobre" element={ <Sobre /> }></Route>
                <Route path="/contato" element={ <Contato /> }></Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}
export default AppRoutes