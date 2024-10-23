'use client'
import React from 'react';
import { manuItem } from '@/lib/itemsData.js'
import Link from 'next/link';


const MaunItems = () => {

    return (
        <div>
            <nav className=" p-4 flex justify-center ">
                <ul className="flex gap-4 z-50">
                    {manuItem.map((item, index) => (
                        <li key={index} className="relative group">
                            <Link href={`/manuItem/${item.path}`} className="cursor-pointer hover:border-b-2 border-orange-400 hover:font-bold hover:text-slate-700 hover:scale-95">{item.title}</Link>

                            {/* Dropdown for brands */}
                            {item.brands && (
                                <ul className="absolute left-0 top-full hidden w-48 bg-gray-200 group-hover:block ">
                                    {item.brands.map((brand, idx) => (
                                        <li key={idx} className="p-2 hover:bg-gray-400 duration-200">
                                            <Link href={`/manuItem/${brand.href}`} className="block">
                                                {brand.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default MaunItems;