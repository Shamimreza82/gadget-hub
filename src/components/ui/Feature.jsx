import React from 'react';
import { GiAngelOutfit } from "react-icons/gi";
import { FaFileExport } from "react-icons/fa6";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { BsFillLuggageFill } from "react-icons/bs";

const Feature = () => {
    return (
        <div className='grid sm:grid-cols-4 gap-4'> 
            <div className='flex items-center gap-4 shadow-md rounded-md p-4'>
                <div>
                    <GiAngelOutfit className='text-6xl text-orange-400' />
                </div>
                <div>
                    <h4 className='text-2xl font-bold'>Outfit Finder</h4>
                    <p>Find Outfits for Gadgets</p>
                </div>
            </div>
            <div className='flex items-center gap-4 shadow-md rounded-md p-4'>
                <div>
                    <FaFileExport className='text-6xl text-orange-400' />
                </div>
                <div>
                    <h4 className='text-2xl font-bold'>Share Experience</h4>
                    <p>We value your feedback</p>
                </div>
            </div>
            <div className='flex items-center gap-4 shadow-md rounded-md p-4'>
                <div>
                    <BsFillPersonLinesFill  className='text-6xl text-orange-400' />
                </div>
                <div>
                    <h4 className='text-2xl font-bold'>Online Support</h4>
                    <p>Get support on whats app</p>
                </div>
            </div>
            <div className='flex items-center gap-4 shadow-md rounded-md p-4'>
                <div>
                    <BsFillLuggageFill  className='text-6xl text-orange-400' />
                </div>
                <div>
                    <h4 className='text-2xl font-bold'>Apple Gagdets Care</h4>
                    <p>Repair your Device</p>
                </div>
            </div>
        </div>
    );
};

export default Feature;