import { Link } from "react-router-dom";
import styled from "styled-components"

function Logo(){
    return(
        <DivLogo>
            <Link to={'/'}><img src='./logo_site-1.png' alt="" /></Link>
            <p>MARCA</p>
        </DivLogo>
    )
}
export default Logo;

const DivLogo = styled.div`
display: flex;
align-items:center;
height: 100%;
color: white;

    img {
        width: 75px;
        height: 75px;
    }
`