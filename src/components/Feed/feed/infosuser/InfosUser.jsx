import styled from "styled-components";

import {BsThreeDots} from 'react-icons/bs';

function InfosUser(){
    return(
        <DivTitle>
            <div id="flex">
                <DivFoto>
                    <div id="photo"> 
                        FOTO 
                    </div> 
                </DivFoto>  

                <DivName>
                    <p>
                        Name
                    </p>
                </DivName>
            </div>
            
            <DivDot>
                <BsThreeDots id="dots"/>
            </DivDot>
        </DivTitle>
    )
}
export default InfosUser;

const DivTitle = styled.section`
display: flex;
justify-content: space-between;
height: 80px;
width: 100%;
border: solid 1px #181c1947;
border-radius: 15px 15px 1px 1px;

    #flex {
        display: flex;
    }      
`

const DivFoto = styled.div`
    height: 100%;
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;

    #photo {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        width: 50px;
        border-radius: 60px;
        background: gray;
    }
`

const DivName = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 10px;
`

const DivDot = styled.div`
width: 20%;
display: flex;
align-items: center;
justify-content: center;

    #dots{
        font-size: 22px;
    }
`