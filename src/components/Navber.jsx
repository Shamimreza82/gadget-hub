
import Link from 'next/link';
import React from 'react';
import MobileView from './ui/MobileView';
import Navber1 from './Navber1';


const manuItem = [
    {
        title: "Phones & Tablets", brands: [
            { name: "Apple", href: "apple" },
            { name: "Samsung", href: "samsung" },
            { name: "Sony", href: "sony" },
            { name: "Microsoft", href: "microsoft" },
            { name: "Dell", href: "dell" },
            { name: "Lenovo", href: "lenovo" },
            { name: "HP", href: "hp" },
            { name: "Asus", href: "asus" }
        ]
    },
    { title: "Laptop & Desktop", },
    { title: "Sound Equipment", },
    { title: "Power & Accessories", },
    { title: "Fitness & Wearable", },
    { title: "Peripherals", },
    { title: "Cover & Glass", },
    { title: "Smart Electronics", },
    { title: "Used Device", },
    { title: "Blog", },
];

console.log(manuItem);

const Navber = () => {
    return (
        <div>
            <Navber1/>
            <nav>
                <ul className="lg:flex lg:visible justify-center gap-5 text-sm shadow-md py-2 cursor-pointer">
                    {manuItem.map((item) => (
                        <li key={item.title}>
                            {item.title}
                        </li>
                    ))}
                </ul>

                <div className="dropdown dropdown-hover">
                    {/* {
                        manuItem.map(item => <>
                            <div tabIndex={0} role="button" className="btn m-1">{item.title}</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                <li>
                                    {
                                        item.brands.map(i => <a>""</a> )       
                                    }
                                    </li>
                            </ul>

                        </>)
                    } */}
                </div>
            </nav>
            <div>
                <MobileView manuItem={manuItem} />
            </div>
        </div>


    );
};

export default Navber;