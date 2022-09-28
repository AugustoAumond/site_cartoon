import styled from "styled-components";

import Button from './../../../../material/buttons/Button';

function Buttons(){
    return(
        <DivButtons>
            <Button text={'Curtir'}/>

            <Button text={'Comentar'}/>
        </DivButtons>
    )
}
export default Buttons;

const DivButtons = styled.div`
    display: flex;
    justify-content: space-around;
    width: 150px;
    margin-left: 28px;
    margin-top: 10px;

    #button {
        height: 25px;
        border: solid 1px gray;
    }

    #button:hover {
        background: gray;
        color: white;
    }
`