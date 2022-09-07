import styled from "styled-components";

import {AiFillMessage, AiFillHeart} from 'react-icons/ai'

import {FiPlusSquare} from 'react-icons/fi'

function Message(){
    return(
        <DivMessage>
            <FiPlusSquare id="publication"/>

            <AiFillHeart id="notification"/>

            <AiFillMessage id="message"/>
        </DivMessage>
    )
}
export default Message;

const DivMessage = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 100px;
height: 100px;
color: white;
margin-right: 20px;

    #message {
        font-size: 18px;
    }
    
    #notification{
        font-size: 18px;
    }
    
    #publication {
        font-size: 18px;
    }`