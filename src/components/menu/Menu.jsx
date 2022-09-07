import styled from "styled-components"

import Logo from "./Logo/Logo";
import Nav from "./nav/Nav";
import IconUser from "./IconUser/IconUser";

function Menu(){
    return (
        <DivMenu>
            <Logo/>

            <Nav/>

            <IconUser/>
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