import styled from "styled-components";

import Button from './../../../material/buttons/Button'

function Botoes(){
    return(
        <DivButton>
            <Button text={'CURTIR'}/>

            <Button text={'MENSAGEM'}/>
        </DivButton>
    )
}
export default Botoes;

const DivButton = styled.div`
    position: relative;
    top: 30px;
    width: 60%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;

        #button {
            color: white;
            background: gray;
            width: 150px;
            height: 35px;
            border: white;
        }  
`