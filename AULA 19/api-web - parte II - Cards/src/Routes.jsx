import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Carrinho from "./Pages/Carrinho"
import GetApi from "./Pages/GetApi"


function Rota (){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<GetApi />}></Route>
            <Route path="/carrinho/:id" element={<Carrinho />}></Route>
        </Routes>
        </BrowserRouter>
    )
}
export default Rota