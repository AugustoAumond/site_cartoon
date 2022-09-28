import styled from "styled-components";

function TitleComents (){
    return (
        <DivTitleComents>  
            <strong>Titulo do Feed</strong>
        </DivTitleComents>
    )
}
export default TitleComents;

const DivTitleComents = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 40px;
`