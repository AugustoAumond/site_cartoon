import styled from "styled-components";

import MenuUser from "../../components/user/menuUser/MenuUser";
import Botoes from "../../components/user/botoes/Botoes";
import Capa from "../../material/capa/Capa";
import Trofeus from "../../components/user/trofeus/Trofeus";
import Sliders from "../../material/sliders/Sliders";
import Titles from "../../material/titles/Titles";
import Galeria from "../../components/user/galeria/Galeria";


function User(){

    const settings = {
        space: 10,
        slides: 2
    }
    return (
        <DivUser>
            <MenuUser/>

            <Capa/>

            <Botoes/>

            <Trofeus/>

            <div id="obrasautorais">
                <Titles titles={'QUADRINHOS DO USUÁRIO'}/>

                <Sliders settings={settings}/>
            </div>
            
            <Galeria/>
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

        #obrasautorais {
            width: 70%;
            margin: 0 auto;
        }

        #divtitles {
            color: white;
            text-align: center;
        }

        #fundo {     
            margin: 0 auto;
            margin-top: 20px; 
            width: 80%;
            max-width: 240px;
            height: 150px;
            border-radius: 20px;
            background: gray;
            transition: 0.5s;
        }
`