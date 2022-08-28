import styled from "styled-components"

import Logo from "./Logo/Logo";
import User from "./User/User";

function Menu(){
    return (
        <DivMenu>
            <Logo/>

            <User/>
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