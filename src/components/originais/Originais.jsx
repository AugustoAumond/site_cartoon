import styled from "styled-components";

import Titles from "../../material/titles/Titles";
import Sliders from "../../material/sliders/Sliders";

function Originais (){
    const settings = {
        space: 5,
        slides: 3
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
    height: 250px;
    width: 100%;
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