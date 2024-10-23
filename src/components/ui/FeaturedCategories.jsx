import React from 'react';
import { featuredCategoriesData } from '@/lib/featuredCategoriesData';
import { IoIosTabletPortrait } from "react-icons/io";
import Link from 'next/link';

console.log(featuredCategoriesData);

const FeaturedCategories = () => {
    return (
        <div>
            <div className='text-center mt-14 space-y-2'>
                <h1 className='text-2xl'>FEATURED CATEGORIES</h1>
                <h5>Get your desired product from featured category</h5>
            </div>
            <div className='grid md:grid-cols-6 grid-cols-2 gap-4 mt-10 cursor-pointer'>
                {
                    featuredCategoriesData.map(items =>
                        <Link key={items.name} href={`/manuItem/${items.name}`} className='border h-32 p-2 text-center hover:scale-105 hover:duration-300 duration-300 hover:text-orange-600 hover:border-orange-600 rounded-md' >
                            <div className='inline-flex items-center justify-center text-2xl'>{items.icons} </div>
                            <h4 className='text-base'>{items.name}</h4>
                        </Link>)
                }
            </div>
        </div>
    );
};

export default FeaturedCategories;