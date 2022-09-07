import styled from "styled-components";
import { useState } from "react";

import Titles from "../../material/titles/Titles";
import Sliders from "../../material/sliders/Sliders";

function Originais (){
    const [width, setWidth] = useState(3);

    setInterval(() =>{
        if (window.innerWidth < 550){
            setWidth(2)
        } else {
            setWidth(3);
        }}, [500])

    const settings = {
        space: 0,
        slides: width
    }

    return(
        <DivOriginais>
            <Titles titles={'Originais'}/>

            <Sliders settings={settings}/> 
        </DivOriginais>
    )
}
export default Originais;

const DivOriginais = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    min-width: 300px;
    max-width: 1420px;
    margin-top: 50px;

    #fundo {     
        margin: 5px;
        margin-top: 20px; 
        width: 90%;
        max-width: 280px;
        height: 150px;
        border-radius: 20px;
        background: gray;
        transition: 0.5s;
    }
`