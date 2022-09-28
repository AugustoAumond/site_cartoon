import styled from "styled-components";

import TitleComents from "./titlecoments/TitleComents";
import TxtComents from "./txtcoments/TxtComents";


function Coments(){
    return(
        <DivComents>
            <TitleComents/>

            <TxtComents/>
        </DivComents>
    )
}
export default Coments;

const DivComents = styled.div`
    margin: 0 auto;
    margin-top: 10px;
    width: 85%;
    color: #181C19;  
`