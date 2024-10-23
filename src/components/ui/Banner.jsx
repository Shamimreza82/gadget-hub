'use client'
import bg1 from '@/assets/1.jpg'
import bg2 from '@/assets/2.jpg'
import bg3 from '@/assets/3.jpg'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';





import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

const Banner = () => {
    return (
        <div className='lg:flex gap-4 '>
            <div className='lg:w-[70%] '>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="flex justify-center items-center h-full z-10"
                >
                    <SwiperSlide >
                        <Image src={bg1} alt='bg_image1' className='rounded-md'></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={bg2} alt='bg_image1' className='rounded-md'></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={bg3} alt='bg_image3' className='rounded-md'></Image>
                    </SwiperSlide>

                </Swiper>
            </div>
            <div className='border flex-grow'>
                Right
            </div>
        </div >
    );
};

export default Banner;