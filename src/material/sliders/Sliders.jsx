import styled from "styled-components";

import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination } from "swiper";

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import {obras} from './../list/list';
import { Link } from "react-router-dom";

function Sliders(props){
    const settings = props.settings;
    const list = props.list ? props.list : obras;

    function tenObras(){
        let newList = [];
        for (let index = 0; index < 10; index++) {
            newList.push(list[index]);  
        }
        return newList;
    }

    return (
        <DivSliders id="divsliders">
            <Swiper 
            modules={[Navigation, Pagination]}
            spaceBetween={settings.space}
            slidesPerView={settings.slides}
            pagination={{ clickable: true }}>
                {tenObras().map((obra, index)=>(
                    <SwiperSlide key={index}>
                        <Link to={`/obras/${obra.id}`}>
                            <div id="fundo">
                                <img src="" alt="" />
                                {console.log(obra.url)}
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </DivSliders>
    )
}
export default Sliders;

const DivSliders = styled.div`
    display: flex;
    width: 100%;
    height: 225px;

    .swiper {
        width: 90%;
        display: flex;
    }

    .swiper-pagination {
        color: white;
        bottom: 0px;
    }

    .swiper-pagination-bullet {
        background: white;
    }
 
    #fundo {     
        margin: 0 auto;
        margin-top: 20px; 
        width: 100px;
        height: 170px;
        border-radius: 20px;
        background: gray;
    }

    img {
        width: 100%;
    }
`