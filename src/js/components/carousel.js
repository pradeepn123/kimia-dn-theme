import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, A11y } from "swiper";

export const Carousel = (props) => {
    const { resposiveSettings, sliderSettings, sliderData } = props || {};
    const [prevEl, setPrevEl] = useState(null);
    const [nextEl, setNextEl] = useState(null);

    let defaultSliderSettings = {
        spaceBetween: 24,
        slidesPerView: 1.25,
        showNavigation: true
    }

    let defaultResponsiveSettings = {
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4
            }
        }
    }

    const handleprev = ref => setPrevEl(ref);
    const handleNext = ref => setNextEl(ref);


    const slideItems = sliderData.map(slideItem => <SwiperSlide>{slideItem}</SwiperSlide>);

    const navigationModule = () => {
        return <div className="arrows">
            <div className="prev-arrow" ref={handleprev}>Prev</div>
            <div className="next-arrow" ref={handleNext}>Next</div>
        </div>
    }

    const swiperSettings = sliderSettings ? sliderSettings : defaultSliderSettings;
    const swiperResponsiveSettings = resposiveSettings ? resposiveSettings : defaultResponsiveSettings;

    const { showNavigation = true } = swiperSettings || {};

    return (
        <>
            <Swiper
                {...swiperSettings}
                modules={[Navigation, Pagination, A11y]}
                {...swiperResponsiveSettings}
                navigation={{
                    prevEl: prevEl,
                    nextEl: nextEl
                }}
            >
                {slideItems}
            </Swiper>
            {showNavigation && navigationModule()}
        </>
    );
};