import styled from "styled-components";

import { Link } from "react-router-dom";

import {BsPlusSquare, BsHeart, BsMessenger} from 'react-icons/bs';
import IconUser from './../../../../material/menu/IconUser/IconUser';


function Notification(){
    return(
        <DivNotification>
            <BsPlusSquare id="feed"/>

            <BsHeart id="notification"/>

            <BsMessenger id="message"/>

            <Link to={'/user'}><IconUser/></Link>
        </DivNotification>
    )
}
export default Notification;

const DivNotification = styled.div`
display: flex;
aling-itens: center;
justify-content: space-around;
width: 30%;
max-width: 200px;

    #feed {
        font-size: 24px;
        cursor: pointer;
    }

    #notification {
        font-size: 24px;
        cursor: pointer;
    }

    #message {
        font-size: 24px;
        cursor: pointer;
    }

    #icon {
        font-size: 24px;
        width: 24px;
        height: 24px;
        color: #181C19;
    }

`