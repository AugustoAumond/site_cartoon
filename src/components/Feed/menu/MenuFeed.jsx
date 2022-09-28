import styled from "styled-components";

import Logo from "../../../material/menu/Logo/Logo";
import Search from "./search/Search";
import Notification from "./notification/Notification";

function MenuFeed(){
    return(
        <DivMenuFeed>
            <Logo/>
            
            <Search/> 

            <Notification/>  
        </DivMenuFeed>
    )
}
export default MenuFeed;

const DivMenuFeed = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px #181C19 solid;
    color: #181C19;
`