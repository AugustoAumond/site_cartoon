import styled from "styled-components";

function Descricao(){
    return (
        <DivDescricao>
            <div id="interacao">
                <section>
                    135 Curtidas
                </section>

                <section>
                    100 Favoritos
                </section>
            </div>

            <div id="description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci ea voluptate quam. Numquam minus laboriosam ullam ex, assumenda nam commodi modi similique eveniet nostrum laborum illo earum quia vero. Perferendis!
            </div>

        </DivDescricao>
    )
}
export default Descricao;

const DivDescricao = styled.div`
    opacity: 0.8;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
    top: -50px;
    margin: 0 auto;
    width: 60%;
    height: 200px;
    background: white;
    border: solid;

    #interacao {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 5px;
        width: 200px;
        height: 35px;
        background: black;
        color: white;
        border: solid white;
    }

    #description {
        width: 90%;
        color: #181C19;
        margin: 10px;
        font-size: 20px;
    }
`