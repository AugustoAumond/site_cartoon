import styled from "styled-components";

import {FaUserCircle} from 'react-icons/fa'

function User(){
    return (
        <DivUser>
            <input type="text" />
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
        width: 30px;
        height: 30px;
    }

    input {
        border-radius: 10px;
        padding: 5px;
        margin: 5px;
        width: 150px;
        height: 30px;
    }
`