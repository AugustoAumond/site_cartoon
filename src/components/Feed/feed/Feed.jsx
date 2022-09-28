import styled from "styled-components";

import { Fragment } from "react";

import InfoUser from "./infosuser/InfosUser";
import Coments from "./coments/Coments";
import Image from "./imagem/Image";
import Buttons from "./buttons/Buttons";

function Feed(props){
    const obras = props.obras;

    return(
        <DivFeed>
            <InfoUser/>

            {obras.obra === false ? <Coments/> : <Image/>}

            {obras.obra === false ? <Image/> : <Coments/>}

            <Buttons/>
        </DivFeed>
    )
}
export default Feed;

const DivFeed = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    max-width: 750px;
    min-width: 400px;
    height: 100%;
    min-height: 500px;
    border: solid 1px #181c1947;
    margin: 0 auto;
    position: relative;
    margin-top: 30px;
    border-radius: 15px;
`