import styled from "styled-components";

import Titles from "../../material/titles/Titles";
import Sliders from "../../material/sliders/Sliders";

function Generos (){
    const settings = {
        space: 10,
        slides: 4
    }

    const categorias = [
    {
        categoria: 'Ação'
    },
    {
        categoria: 'Drama'
    },
    {
        categoria: 'Romance'
    },
    {
        categoria: 'Terror'
    },
    {
        categoria: 'Aventura'
    },
    {
        categoria: 'Comédia'
    }
]

    return (
        
        <DivGeneros>
            {categorias.map((categ, index)=>(
            <div key={index} id="column">
                <section>
                    <Titles titles={categ.categoria}/>

                    <Sliders settings={settings} />
                </section>
            </div>
            ))}
        </DivGeneros>
    )
}
export default Generos;

const DivGeneros = styled.div`
padding: 30px;
margin-top: 30px;

    #column {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
    }

    section {
        display: flex;
    }

    #divtitles {
        justify-content: center;
        width: 30%;
        height: 90px;
    }

    #divsliders {
        width: 80%;
    }

    .swiper {
        width: 100%;
    }

    @media (max-width: 800px){
        #fundo {
            width: 70px;
            height: 140px;
            margin: unset;
        }

        #divtitles {
            height: 40px;
        }
    }
`