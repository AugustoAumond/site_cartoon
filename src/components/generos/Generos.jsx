import styled from "styled-components";

import Titles from "../../material/titles/Titles";
import Sliders from "../../material/sliders/Sliders";
import { useState } from "react";

function Generos (){
    const [width, setWidth] = useState(4);

    setInterval(() =>{
        if (window.innerWidth < 550){
            setWidth(3)
        } else {
            setWidth(4);
        }}, [500])
    

    const settings = {
        space: 10,
        slides: width
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

    @media (max-width: 500px){
        section {
            flex-direction: column;
        }

        #divtitles {
            width: 100%;
        }

        #divsliders {
            width: 100%;
            margin-top: 10px;
        }

    }
`