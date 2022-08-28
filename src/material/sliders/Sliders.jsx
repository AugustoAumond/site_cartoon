import styled from "styled-components";

import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css'

import {obras} from './../list/list';

function Sliders(props){
    const settings = props.settings;

    return (
        <DivSliders id="divsliders">
            <Swiper 
            spaceBetween={settings.space}
            slidesPerView={settings.slides}>
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

    .swiper {
        width: 90%;
        display: flex;
    }
 
    #fundo {     
        margin-top: 20px; 
        width: 100px;
        height: 170px;
        border-radius: 20px;
        background: gray;
    }
`