import styled from "styled-components"

import { Link } from "react-router-dom";

import Logo from "../../../material/menu/Logo/Logo";
import Nav from "../../../material/menu/nav/Nav";
import IconUser from '../../../material/menu/IconUser/IconUser';

function Menu(){
    return (
        <DivMenu>
            <Logo/>

            <Nav/>

            <Link to={'/login'}><IconUser/></Link>
        </DivMenu>
    )
}
export default Menu;

const DivMenu = styled.div`
display: flex;
justify-content: space-between;
height: 100px;
max-width: 1420px;
`