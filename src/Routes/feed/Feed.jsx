import styled from'styled-components';

import {obras} from './../../material/list/list';

import './Feed.css'

import MenuFeed from '../../components/Feed/menu/MenuFeed';
import Feeds from '../../components/Feed/feed/Feed';

function Feed(){
    return (
        <DivFeed>
            <MenuFeed/>

            {obras.map((obras, index)=>(
              <Feeds key={index} obras={obras}/>  
            ))}
            
        </DivFeed>
    )
}
export default Feed;

const DivFeed = styled.div`
background: white;
color: #181C19;
min-height: 100vh;
height: 100%;

`