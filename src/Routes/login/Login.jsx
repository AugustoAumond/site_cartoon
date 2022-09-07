import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo from "../../components/menu/Logo/Logo";
import IconUser from "../../components/menu/IconUser/IconUser";

import Button from "../../material/buttons/Button";
import Inputs from "../../material/inputs/Inputs";

function Login (){
    return(
        <DivLogin>
            <div id="menu">
                <Logo/>
                <IconUser/>
            </div>

            <DivForm>
                <Inputs text={'Login'}/>

                <Inputs text={'Senha'}/>

                <Link to={'/user'}><Button text={'Entrar'}/></Link>

                <section>
                    <strong id="forgoten">Esqueceu sua senha?</strong>
                    <Link to={'/cadastrar'}><strong>Cadastrar</strong></Link>
                </section>
            </DivForm> 
        </DivLogin>
    )
}
export default Login;

const DivLogin = styled.div`
max-width: 1420px;
background: #181C19;
min-height: 100vh;
margin: 0 auto;

    #menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

const DivForm = styled.div`
position: relative;
top: 40px;
margin: 0 auto;
width: 85%;
max-width: 615px;
height: 400px;
background: white;
border-radius: 20px;

    #button{
        position: relative;
        top: 75px;
        margin: 0 auto;
        width: 100px;
        height: 35px;
        border-radius: 2px;
    }

    section {
        position: relative;
        top: 90px;
        display: flex;
        justify-content: space-around;
        width:60%;
        margin: 0 auto;
        cursor: pointer;
    }

    #forgoten {
        position: relative;
        left: -50px;
    }

    strong {
        text-decoration: none;
        color: black;
    }
`

