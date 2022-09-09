import styled from "styled-components";

import {obras} from './../../../../material/list/list';

function Items(){
    return (
        <DivItems>
            <div id="flex">
            {obras.map((item, index)=>(
                <div id="items" key={index}>
                </div>
            ))}
            </div>
        </DivItems>
    )
}
export default Items;

const DivItems = styled.div`
    width: 95%;
    margin: 0 auto;

    #flex {
        display: flex;
        flex-wrap: wrap;
    }

    #items {
        display: flex;
        flex: 1 1 25%;
        height: 150px;
        margin: 5px;
        background: gray;
        cursor: pointer;
    }
`