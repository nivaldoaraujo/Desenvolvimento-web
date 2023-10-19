

import Menu from "../../Components/Menu/Menu"
import MenuAgora from "../../Components/Menu/NavManu"
import Rodape from "../../Components/Roadape/Radape"
import CardSobre from './Card';



function Sobre(){
    return(
        <>
        <MenuAgora />
        {/* <Menu /> */}
        <CardSobre />
        
        <Rodape />
        </>
    )
}
export default Sobre