import styled from "styled-components";

import Titles from "../../material/titles/Titles";
import Sliders from "../../material/sliders/Sliders";

function Autores(){
    const settings = {
        space: 20,
        slides: 6
    }

    return(
        <DivAutores>
            <Titles titles={'Autores'}/>

            <Sliders settings={settings}/>
        </DivAutores>
    )
}
export default Autores;

const DivAutores = styled.div`
    display: flex;
    flex-direction: column;
    height: 250px;
    width: 100%;
    max-width: 1420px;
    z-index: 2;

    #fundo {
        border-radius: 150px;
        width: 110px;
        height: 110px;
        background: white;
    }

    @media (max-width: 800px){
       #fundo {
        width: 80px;
        height: 80px;
       } 
    }
`
