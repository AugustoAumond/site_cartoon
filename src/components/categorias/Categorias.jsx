import styled from "styled-components";

import Button from "../../material/buttons/Button";

function Categorias(){

    return(
        <DivCategorias>
            <Button text={'Quadrinhos'} />

            <Button text={'Mangás'}/>

            <Button text={'HQ'}/>

            <Button text={'Webtoons'}/>
        </DivCategorias>
    )
}
export default Categorias;

const DivCategorias = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
height: 80px;

    #button{
        width: 130px;
        height: 40px;
        border: white;
        color: #181C19;
        font-weight: 700;
    }
`