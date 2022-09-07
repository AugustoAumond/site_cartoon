import styled from "styled-components";

import Logo from "../../components/menu/Logo/Logo";
import Message from "../../components/menu/user/message/message";
import Button from './../../material/buttons/Button';
import Capa from "../../material/capa/Capa";
import Trofeus from "../../components/user/trofeus/Trofeus";
import Sliders from "../../material/sliders/Sliders";
import Titles from "../../material/titles/Titles";

function User(){

    const settings = {
        space: 10,
        slides: 2
    }
    return (
        <DivUser>
            <div id="menu">
                <Logo/>

                <div id='btnmsg'>
                    <Button text="PUBLICAR OBRA"/>

                    <Message/>
                </div>          
            </div>

            <Capa/>

            <Botoes>
                <Button text={'CURTIR'}/>

                <Button text={'MENSAGEM'}/>
            </Botoes>

            <Trofeus/>

            <div id="obrasautorais">
                <Titles titles={'QUADRINHOS DO USUÁRIO'}/>

                <Sliders settings={settings}/>
            </div>
            
        </DivUser>
    )
}
export default User;

const DivUser = styled.div`
max-width: 1420px;
background: #181C19;
height: 100%;
min-height: 100vh;
margin: 0 auto;

    #menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

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

    #obrasautorais {
        width: 70%;
        margin: 0 auto;
    }

    #divtitles {
        color: white;
        text-align: center;
    }

    #fundo {     
        margin: 5px;
        margin-top: 20px; 
        width: 80%;
        max-width: 240px;
        height: 150px;
        border-radius: 20px;
        background: gray;
        transition: 0.5s;
    }
`

    const Botoes = styled.div`
    position: relative;
    top: 30px;
    width: 60%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    ` 