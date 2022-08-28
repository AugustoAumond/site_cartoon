import styled from "styled-components";

function Destaques(){
    return (
        <DivDestaques>
            <h1>DESTAQUES DO MÊS</h1>
            
            <img src="./baner.png" alt="" />
        </DivDestaques>
    )
}
export default Destaques;

const DivDestaques = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background: white;
max-width: 1420px;
width: 85%;
height: 100%;
padding: 25px;
margin: 0 auto;

    h1 {
        margin-top: 40px;
    }

    img {
        width: 80%;
    }
`