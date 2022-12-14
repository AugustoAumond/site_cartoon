import styled from "styled-components";

import {FaUserCircle} from 'react-icons/fa'

function User(){
    return (
        <DivUser >
           <FaUserCircle id="icon"/>
        </DivUser>
    )
}
export default User;

const DivUser = styled.div`
display: flex;
align-items: center;
height: 100%;
color: white;
margin-right: 10px;

    #icon {
        text-decoration: none;
        color: white;
        width: 30px;
        height: 30px;
    }
`