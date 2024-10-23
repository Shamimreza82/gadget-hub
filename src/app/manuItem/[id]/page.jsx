
import Feature from '@/components/ui/Feature';
import React from 'react';
import { FaHome } from "react-icons/fa";

const page = ({ params }) => {

    // let id = params
    // let routeName = id.

    console.log(params.id);


    return (
        <div className='container mx-auto'>
            <div className='flex items-center gap-2'>
                <FaHome></FaHome> {params.id}/
            </div>
            <div className='flex gap-4 mt-4'>
                <div className='border w-80'>
                    <div>
                     
                    </div>
                </div>
                <div className='border w-full'>
                    <div className='flex gap-2 justify-between w-full'>
                        <h3 className='items-center inline-flex'>{params.id}</h3>
                        <h4 className='inline-flex items-center gap-4'>Sort By:
                            <span><select className="select select-accent w-36 border-orange-400">
                                <option>High to low</option>
                                <option>Low to High</option>
                            </select></span></h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;