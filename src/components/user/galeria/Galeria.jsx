import styled from "styled-components";

import Titles from "../../../material/titles/Titles";
import Items from "./Items/Items";

function Galeria (){

    return (
        <DivGaleria>
            <Titles titles={'GALERIA'}/>

            <Items/>
        </DivGaleria>
    )
}
export default Galeria;

const DivGaleria = styled.div`
    height: 100%;
    width: 100%;
`