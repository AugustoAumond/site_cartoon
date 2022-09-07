import styled from "styled-components";

import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination } from "swiper";

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import {obras} from './../list/list';

function Sliders(props){
    const settings = props.settings;

    return (
        <DivSliders id="divsliders">
            <Swiper 
            modules={[Navigation, Pagination]}
            spaceBetween={settings.space}
            slidesPerView={settings.slides}
            pagination={{ clickable: true }}>
                {obras.map((obra, index)=>(
                    <SwiperSlide key={index}>
                        <div id="fundo">
                        </div>
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
`