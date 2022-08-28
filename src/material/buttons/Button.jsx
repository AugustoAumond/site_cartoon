import styled from "styled-components";

function Button(props){

    return (
        <DivButton id="button">
            {props.text}
        </DivButton>
    )
}
export default Button;

const DivButton = styled.button`
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.5s;
`