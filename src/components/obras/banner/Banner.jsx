import styled from "styled-components";

import Button from './../../../material/buttons/Button';

function Banner(){
    return (
        <DivBanner>
            <div id="img">
                <div id="centralize">
                    <h1> NOME DA OBRA </h1>

                    <section>
                        <Button text={'INSCREVER'}/>
    
                        <Button text={'FAVORITO'}/>
                    </section>
                </div>
            </div>
                        
        </DivBanner>
    )
}
export default Banner;

const DivBanner = styled.div`
    display: flex;
    width: 100%;
    max-width: 1420px;
    height: 350px;
    margin: 0 auto;

    #img {
        background: url('/foto_grande.jpg');
        max-width: 1420px;
        position: absolute;
        height: 350px;
        width: 100%;
    }

    #centralize {
        width: 100%;
        position: relative;
        top: 50px;
    }

    h1 {
        
        width: 100%;
        text-align: center;
        font-size: 56px;
        color: #181C19;
    }

    section {
        display: flex;
        justify-content: flex-end;
        position: relative;
        top: 50px;
    }

    #button {
        position: relative;
        height: 30px;
        width: 100px;
        margin-left: 50px;
        background: #181C19;
        color: white;
        border: white;
    }

`