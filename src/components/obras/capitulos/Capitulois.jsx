import { useState } from "react";
import styled from "styled-components";

import {obras} from './../../../material/list/list';

import {AiFillEye} from 'react-icons/ai'

function Capitulos(){
    const [number, setNumber] = useState(10);

    function Items(number){
        let list = [];  

        if (number > obras.length){
            setNumber(obras.length)
        } 
          
        for (let i = 0; i < number; i++){
            if (obras[i]){
                list.push(obras[i]);
            }
        }
        return list;
    }

  
    function Adicionar(){
        setNumber(number + 10)
    }

    return (
        <DivCapitulos>
            <Select>
                <strong>Selecione Número de Capitulos</strong>

                <select id="number" value={number} onChange={((e)=>setNumber(e.currentTarget.value))}> 
                    <option value={number} selected> {number} </option>
                    <option value={10}> 10 </option>
                    <option value={50}> 50 </option>
                    <option value={1000}> Todos </option> 
                </select>
            </Select>

            {Items(number).map((item, index) => (
                <div id="container" key={index}>
                    <img src="" alt="" />

                    <div id="capitulo">
                        Capitulo {item?.capitulo}
                    </div>

                    <div id="title">
                        {item?.title}
                    </div>

                    <div id="eye">
                        <AiFillEye/>
                    </div>
                </div>
            ))}

                <button id="button" onClick={(()=>Adicionar())} > VER MAIS </button>
        </DivCapitulos>
    )
}
export default Capitulos;

const DivCapitulos = styled.div`
    width: 60%;
    margin: 0 auto;
    border: solid white 1px;
    display: flex;
    flex-direction: column;
    align-items: center;

    #container{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 95%;
        height: 50px;
        margin: 5px;
        color: #181C19;;
        background: gray;
    }

    img {
        width: 40px;
        height: 40px;
        background: gray;
    }

    #capitulo {
        display: flex;
        align-items: center;
        justify-content: center;
        background: gray;
        height: 40px;
        width: 120px;
        
    }

    #title {
        display: flex;
        align-items: flex-start;
        max-width: 25ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: wrap;
        width: 230px;
        height: 40px;
        background: gray;
    }

    #eye {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 40px;
        background: gray;
    }

    #button {
        margin: 25px;
        background: gray;
        height: 40px;
        width: 150px;
        color: white;
        border: white;
    }
`

const Select = styled.div`
position: relative;
left: 10px;
display: flex;
align-items: center;
width: 100%;
height: 80px;
    
    strong {
        width: 250px;
        color: white;
    }
    
`