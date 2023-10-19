import Menu from "../../Components/Menu/Menu"
import MenuAgora from "../../Components/Menu/NavManu"
import BasicExample from "../../Components/Menu/NavManu"
import Rodape from "../../Components/Roadape/Radape"
import FormExample from "./fromulario"
import Formular from "./fromulario"


function Contato(){
    return(
        <>
        <MenuAgora />
        {/* <Menu /> */}
       
        <div className="container">
            <div>
                <FormExample /> 
            </div><br />
        </div>
        <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam aut optio veniam, id iure quo ullam. Est quibusdam porro sunt, explicabo, at, delectus doloremque earum rerum nulla saepe aut!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non amet libero accusamus alias facilis praesentium earum, quia nulla, debitis tempora eveniet iste, maiores dolor sint aspernatur pariatur. Consequatur, commodi doloribus.</p>
        </div>
       
             
        
        <Rodape />
        </>
    )
}
export default Contato