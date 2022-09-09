import styled from "styled-components";
import { useState } from "react";

import Titles from "../../../material/titles/Titles";
import Sliders from "../../../material/sliders/Sliders";

function Autores(){
    const [width, setWidth] = useState(6);

    setInterval(() =>{
        if (window.innerWidth < 550){
            setWidth(3.5)
        } else {
            setWidth(6.5);
        }}, [500])

    const settings = {
        space: 0,
        slides: width
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
    height: 100%;
    width: 100%;
    min-width: 300px;
    max-width: 1420px;

    #divsliders {
        height: 175px;
    }

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
