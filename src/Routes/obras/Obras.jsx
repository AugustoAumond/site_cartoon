import styled from "styled-components";

import MenuObras from "../../components/obras/menuobras/MenuObras";
import Banner from "../../components/obras/banner/Banner";
import Descricao from "../../components/obras/descricao/Descricao";
import Capitulos from "../../components/obras/capitulos/Capitulois";
import Recomendacao from "../../components/obras/recomendacao/Recomendacao";

function Obras(){
    return (
        <DivObras>
            <MenuObras/>

            <Banner/>

            <Descricao/>

            <Capitulos/>

            <Recomendacao/>
        </DivObras>
    )
}
export default Obras;

const DivObras = styled.div`
max-width: 1420px;
margin: 0 auto;
`