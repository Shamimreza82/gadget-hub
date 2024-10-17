'use client'

import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { CiGift } from "react-icons/ci";

const Navber1 = () => {

    const [searchValue, setSearchValue] = useState('')

    // const searchHandler = (e) => {
    //     e.preventDefault()
    //     setSearchValue(e.target.value)
    // }

    console.log(searchValue);

    return (
        <div className='bg-slate-800 text-white py-4'>
            <div className='container mx-auto flex items-center gap-10 justify-around'>
                <div className='flex items-center gap-10 '>
                    <h1 className='text-2xl font-extrabold text-orange-500 shadow-md'>GADGET HUB</h1>

                    <div className='flex items-center text-black'>
                        <input onChange={(e) => { e.preventDefault(), setSearchValue(e.target.value) }} className='py-2 px-14 rounded-full outline-orange-500  duration-100' type="search" name="" id="" placeholder='Search' />
                        <IoSearchSharp className='text-black text-2xl -ml-9' />
                    </div>
                </div>

                <div className='flex gap-8'>
                    <div className='flex items-center gap-1 leading-5 '>
                        <CiGift className='text-4xl text-orange-300' />
                        <div>
                            <h4 className='text-[18px]'>Offers</h4>
                            <h3 className='text-sm'>Latest Offers</h3>
                        </div>
                    </div>
                    <div className='flex items-center gap-1 leading-5 '>
                        <CiGift className='text-4xl text-orange-300' />
                        <div>
                            <h4 className='text-[18px]'>Offers</h4>
                            <h3 className='text-sm'>Latest Offers</h3>
                        </div>
                    </div>
                    <div className='flex items-center gap-1 leading-5 '>
                        <CiGift className='text-4xl text-orange-300' />
                        <div>
                            <h4 className='text-[18px]'>Offers</h4>
                            <h3 className='text-sm'>Latest Offers</h3>
                        </div>
                    </div>
                    <div className='flex items-center gap-1 leading-5 '>
                        <CiGift className='text-4xl text-orange-300' />
                        <div>
                            <h4 className='text-[18px]'>Offers</h4>
                            <h3 className='text-sm'>Latest Offers</h3>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Navber1;