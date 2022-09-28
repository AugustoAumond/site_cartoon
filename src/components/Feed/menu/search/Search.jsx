import styled from "styled-components";

import {BiSearchAlt2} from 'react-icons/bi'

function Search(){
    return(
        <DivSearch>
            <input type="text" />

            <BiSearchAlt2 id="lupa"/>
        </DivSearch>
    )
}
export default Search;

const DivSearch = styled.div`
    width: 100%;
    max-width: 300px;
    display: flex;
    align-items: center;

    input{
        height: 25px;
        width: 100%;
        padding: 5px;
        border-radius: 10px;
        margin: 10px;
    }
    
    #lupa {
        opacity: 0.4;
        position: relative;
        right: 35px;
    }
`