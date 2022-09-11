import './App.css';
import styled from 'styled-components';

import Menu from '../../components/homepage/menuhome/MenuHomepage';
import Destaques from '../../components/homepage/destaques/Destaques';
import Categorias from '../../components/homepage/categorias/Categorias';
import Lancamentos from '../../components/homepage/lancamentos/Lancamentos';
import Originais from '../../components/homepage/originais/Originais';
import Autores from '../../components/homepage/autores/Autores';
import Generos from '../../components/homepage/generos/Generos';

function Home() {

  return (
      <DivHome> 
        <Menu/>

        <Destaques/>

        <Categorias/>

        <Lancamentos/>

        <Originais/>

        <Autores/>

        <Generos/>
      </DivHome>
  )
}

export default Home

const DivHome = styled.div`
max-width: 1420px;
background: #181C19;
height: 100%;
margin: 0 auto;
`
