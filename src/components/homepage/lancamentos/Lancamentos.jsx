import styled from "styled-components";
import { useState } from "react";

import Titles from "../../../material/titles/Titles";
import Sliders from "../../../material/sliders/Sliders";

function Lancamentos(){
    const [width, setWidth] = useState(5);

    setInterval(() =>{
        if (window.innerWidth < 550){
            setWidth(3.5)
        } else {
            setWidth(5.5);
        }}, [500])

    const settings = {
        space: 0,
        slides: width
    }

    return(
        <DivLancamentos>
            <Titles titles={'Lançamentos'}/>

            <Sliders settings={settings}/>
        </DivLancamentos>
    )
}
export default Lancamentos;

const DivLancamentos = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    min-width: 300px;
    max-width: 1420px;

    @media (max-width: 700px){
        #fundo {
            width: 70px;
            height: 140px;
        }
`