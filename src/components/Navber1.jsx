'use client'

import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { CiGift } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import Link from 'next/link';

const Navber1 = () => {

    const [searchValue, setSearchValue] = useState('')

    // const searchHandler = (e) => {
    //     e.preventDefault()
    //     setSearchValue(e.target.value)
    // }

    console.log(searchValue);

    return (
        <div className='bg-slate-800 text-white py-4'>
            <div className=' mx-auto flex items-center gap-10 justify-around'>
                <div className='flex items-center gap-10 '>
                    <Link href='/' className='text-2xl font-extrabold text-orange-300 shadow-md'>GADGET HUB</Link>

                    <div className='flex items-center text-black'>
                        <input onChange={(e) => { e.preventDefault(), setSearchValue(e.target.value) }} className='py-2 px-14 rounded-full outline-orange-500  duration-100' type="search" name="" id="" placeholder='Search' />
                        <IoSearchSharp className='text-black text-2xl -ml-9' />
                    </div>
                </div>

                <div className='flex gap-8'>
                    <div className='flex items-center gap-1 leading-5 '>
                        <CiGift className='text-4xl text-orange-300' />
                        <div>
                            <h4 className='text-[16px]'>Offers</h4>
                            <h3 className='text-sm'>Latest Offers</h3>
                        </div>
                    </div>
                    <div className='flex items-center gap-1 leading-5 '>
                        <TiShoppingCart className='text-4xl text-orange-300' />
                        <div>
                            <h4 className='text-[16px]'>Carts</h4>
                            <h3 className='text-sm'>Add Items</h3>
                        </div>
                    </div>
                    <div className='flex items-center gap-1 leading-5 space-x-2 '>
                        <FaEnvelopeOpenText className='text-3xl text-orange-300' />
                        <div>
                            <h4 className='text-[16px]'>Pre-Order</h4>
                            <h3 className='text-sm'>Order Today</h3>
                        </div>
                    </div>
                    <div className='flex items-center gap-1 leading-5 space-x-2'>
                        <VscAccount className='text-3xl text-orange-300' />
                        <div>
                            <h4 className='text-[16px]'>Account</h4>
                            <h3 className='text-sm '>Register or Login</h3>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Navber1;