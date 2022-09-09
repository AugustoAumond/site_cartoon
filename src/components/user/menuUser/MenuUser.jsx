import styled from "styled-components";

import Logo from "../../menu/Logo/Logo";
import Message from './message/Message'
import Button from "../../../material/buttons/Button";

function MenuUser(){
    return (
        <DivMenu>
            <Logo/>

            <div id='btnmsg'>
                    <Button text="PUBLICAR OBRA"/>

                    <Message/>
                </div>  
        </DivMenu>
    )
}
export default MenuUser;

const DivMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

        #btnmsg {
            display: flex; 
            justify-content: space-between;
            width: 350px;
            align-items: center;
            heihgt: 100px;
        }

        #button {
            color: white;
            background: gray;
            width: 150px;
            height: 35px;
            border: white;
        }
    `