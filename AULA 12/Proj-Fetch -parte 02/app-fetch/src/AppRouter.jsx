import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Add from "./Pages/Add";
import ApiUser from "./Pages/ApiUser";

function AppRouter(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<ApiUser />}></Route>
            <Route path="/criar" element={<Add />}></Route>
           
        </Routes>
        </BrowserRouter>
    )
}
export default AppRouter