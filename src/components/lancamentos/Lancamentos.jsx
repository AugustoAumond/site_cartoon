import styled from "styled-components";

import Titles from "../../material/titles/Titles";
import Sliders from "../../material/sliders/Sliders";

function Lancamentos(){
    const settings = {
        space: 50,
        slides: 5
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
    max-width: 1420px;

    @media (max-width: 700px){
        #fundo {
            width: 70px;
            height: 140px;
        }
`