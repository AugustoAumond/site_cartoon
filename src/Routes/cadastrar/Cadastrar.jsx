import { Link } from "react-router-dom";
import styled from "styled-components"
import Button from "../../material/buttons/Button";
import Inputs from "../../material/inputs/Inputs";

function Cadastrar(){
    return (
        <DivCadastrar>
            
            <DivForm>
                <section>
                    <h1>CADASTRAR</h1>
                </section>

                <div>
                    <section id="photo">
                        FOTO
                    </section>
                </div>
                
                <Inputs text={'Nome'}/>

                <Inputs text={'Email'}/>

                <Inputs text={'Endereço'}/>

                <Inputs text={'Cidade'}/>

                <Inputs text={'Login'}/>

                <Inputs text={'Senha'}/>

                <Inputs text={'Repetir a Senha'}/>

                <Link to={'/login'}><Button text={'CADASTRAR'}/></Link>
            </DivForm>
        </DivCadastrar>
    )
}
export default Cadastrar;

const DivCadastrar = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1420px;
    background: #181C19;
    min-height: 100vh;
    height: 1400px;
    margin: 0 auto;

    section {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
    }

    #photo {
        background: gray;
        width: 150px;
        height: 150px;
        border-radius: 150px;
        margin-left: 20px;
    }

    #button {
        text-decoration: none;
        position: relative;
        top: 95px;
        margin: 0 auto;
        height: 35px;
        width: 175px;
        background: #181C19;
        color: white;
        border: white;
        
    }

    #button: hover {
        background: gray;
    }
    
`

const DivForm = styled.div`
    position: relative;
    top: 40px;
    margin: 0 auto;
    width: 85%;
    max-width: 615px;
    height: 1200px;
    background: white;
    border-radius: 20px;
`