import { Link } from "react-router-dom";
import styled from "styled-components"

function Logo(){
    return(
        <DivLogo>
            <Link to={'/'}><img src='/logo_site-1.png' alt="" /></Link>

            <img id="nome" src="/rabisconome.png" alt="" />
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

    #nome {
        width: 110px;
        height: 85px;
    }
`