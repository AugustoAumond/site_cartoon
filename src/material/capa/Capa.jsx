import styled from "styled-components";

function Capa(){
    return(
        <DivCapa>
            <div id="photouser">
                foto
            </div>

            <DivXp>
                xp
                <div id="barraxp">

                </div>

                <div id="icon">

                </div>
            </DivXp>
                
            <DivSeguidores>
                <section>
                    23
                    <p>SEGUINDO </p>   
                </section>

                <section>
                    50
                    <p>SEGUIDORES </p> 
                </section>
    
                <section>
                    30
                    <p>CURTIDAS</p>
                </section>
            </DivSeguidores>
        </DivCapa>
    )
}
export default Capa;

const DivCapa = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 360px;
    
    #photouser {
        position: relative;
        top: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 200px;
        width: 200px;
        background: gray;
        border-radius: 400px;
    }        
    `

    const DivXp = styled.div`
    margin-left: 0px;
    position: relative;
    top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 40px;
    color: gray;
        

    #barraxp {
        margin: 5px;
        width: 150px;
        height: 15px;
        border-radius: 50px;
        background: gray;
    }

    #icon {
        background: gray;
        width: 15px;
        height: 15px;
        border-radius: 50px;
    }
`

    const DivSeguidores = styled.div`
        display: flex;
        justify-content: space-between;
        position: relative;
        top: 40px;
        width: 70%;
        height: 60px;

        section {
            width: 150px;
            justify-content: center;
            color: white;
            font-size: 18px;
            font-weight: 700;
            text-align: center;
        }

        p {
            text-align: center;
        } 
`

    const Botoes = styled.div`
    `