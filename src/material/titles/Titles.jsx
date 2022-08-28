import styled from "styled-components"

function Titles(props){
    return(
        <DivTitles id="divtitles">
            <h1>{props.titles}</h1>

            <div id="line"></div>
        </DivTitles>
    )
}
export default Titles;

const DivTitles = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
max-width: 1420px;
margin-top: 50px;

    h1 {
        margin: 0 auto; 
        color: white;
    }

    #line {
        margin: 0 auto; 
        margin-top: 10px;
        border-bottom: 2px solid #28472B;
        width: 80%;
    }
`



