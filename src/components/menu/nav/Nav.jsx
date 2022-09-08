import styled from "styled-components";
import Categorias from "../../categorias/Categorias";


function Nav(){
    function Lancamentos(){
        window.scrollBy({
            top: 300,
            left: 100,
            behavior: 'smooth'
          });
    }

    function Originais(){
        window.scrollBy({
            top: 700,
            left: 100,
            behavior: 'smooth'
          });
    }

    function Autores(){
        window.scrollBy({
            top: 900,
            left: 100,
            behavior: 'smooth'
          });
    }

    function Generos(){
        window.scrollBy({
            top: 1400,
            left: 100,
            behavior: 'smooth'
          });
    }

    return(
        <DivNav>
            <li onClick={(()=>Lancamentos())}>Lançamentos</li>
            <li onClick={(()=>Originais())}> Originais </li>
            <li onClick={(()=>Autores())}> Autores </li>
            <li onClick={(()=>Generos())}> Gêneros </li>
        </DivNav>
    )
}
export default Nav;

const DivNav = styled.ul`
display: flex;
align-items: center;
justify-content: space-between;
max-width: 800px;
color: white;
list-style: none;
width: 60%;

    li {
        cursor: pointer;
    }

    @media (max-width: 650px){
        display: none;
    }
`