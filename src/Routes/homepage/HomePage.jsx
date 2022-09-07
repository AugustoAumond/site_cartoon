import './App.css';
import styled from 'styled-components';

import Menu from '../../components/menu/Menu';
import Destaques from '../../components/destaques/Destaques';
import Categorias from '../../components/categorias/Categorias';
import Lancamentos from '../../components/lancamentos/Lancamentos';
import Originais from '../../components/originais/Originais';
import Autores from '../../components/autores/Autores';
import Generos from '../../components/generos/Generos';

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
