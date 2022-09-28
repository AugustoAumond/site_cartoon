import styled from "styled-components";
import { useState, useEffect } from "react";

import axios from "axios";

import Titles from "../../../material/titles/Titles";
import Sliders from "../../../material/sliders/Sliders";

function Lancamentos(){
    const [list, setList] = useState();
    const [width, setWidth] = useState(5);

    useEffect(()=>{
         axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=fdec3cf017f52d95fdcd581919da1255').
        then((response)=>{
            setList(response.data.results);
          console.log(response.data.results)
        })
        .catch(err=>{
          console.log(err);
        })
      },[])

    setInterval(() =>{
        if (window.innerWidth < 550){
            setWidth(3.5)
        } else {
            setWidth(5.5);
        }}, [500])

    const settings = {
        space: 0,
        slides: width
    }

    return(
        <DivLancamentos>
            <Titles titles={'Lançamentos'}/>

            <Sliders list={list} settings={settings}/>
        </DivLancamentos>
    )
}
export default Lancamentos;

const DivLancamentos = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    min-width: 300px;
    max-width: 1420px;

    @media (max-width: 700px){
        #fundo {
            width: 70px;
            height: 140px;
        }
`