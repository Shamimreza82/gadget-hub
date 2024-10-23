'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const ReadyForOrder = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    let appendNumber = 4;
    let prependNumber = 1;

    return (
        <div className='my-20'>
            <div>
                <h3 className='text-center text-2xl'>Ready for Order</h3>
            </div>
            <div className='h-96 mt-8'>
                <Swiper
                    onSwiper={setSwiperRef}
                   speed={500}
                    slidesPerView={5}
                    centeredSlides={true}
                    spaceBetween={20}
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="h-full px-2 "
                >
                    <SwiperSlide className='border'>Slide 1</SwiperSlide>
                    <SwiperSlide className='border'>Slide 1</SwiperSlide>
                    <SwiperSlide className='border'>Slide 1</SwiperSlide>
                    <SwiperSlide className='border'>Slide 1</SwiperSlide>
                    <SwiperSlide className='border'>Slide 1</SwiperSlide>
                    <SwiperSlide className='border'>Slide 1</SwiperSlide>
                    <SwiperSlide className='border'>Slide 1</SwiperSlide>
             
                </Swiper>

            </div>
        </div>
    );
};

export default ReadyForOrder;