import styled from "styled-components";

function Recomendacao (){
    return (
        <DivRecomendacao>   
            Recomendações
        </DivRecomendacao>
    )
}
export default Recomendacao;

const DivRecomendacao = styled.div`
    margin-top: 50px;
    width: 100%;
    height: 200px;
    background: green;
    color: white;
    font-size: 28px;
    text-align: center;
`