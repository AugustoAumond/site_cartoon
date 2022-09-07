import styled from "styled-components";

function Inputs (props){
    return (
        <DivInput>
            <p>{props.text}</p>

            <input id="input" type="text" />
        </DivInput>
    )
}
export default Inputs;

const DivInput = styled.div`
width: 100%;
position: relative;
top: 50px;
left: 20px;

    p {
        margin: 5px;
        position: relative;
        color: #181C19;
        font-weight: 700;
        font-size: 18px;
    }

    #input {
        padding: 5px;
        width: 85%;
        max-width: 1000px;
        height: 45px;
        border-radius: 10px;
        margin: 10px;
    }

`