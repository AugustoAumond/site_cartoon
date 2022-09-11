import styled from "styled-components";

import Logo from "../../../material/menu/Logo/Logo";
import Nav from "../../../material/menu/nav/Nav";
import IconUser from "../../../material/menu/IconUser/IconUser";

function MenuObras(){
    return (
        <DivMenu>
            <Logo/>

            <Nav/>

            <IconUser/>
        </DivMenu>
    )
}
export default MenuObras;

const DivMenu = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100px;
    max-width: 1420px;
`