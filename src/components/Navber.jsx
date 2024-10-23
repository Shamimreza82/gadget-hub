import React from 'react';
import MobileView from './ui/MobileView';
import Navber1 from './Navber1';
import MaunItems from '@/app/manuItem/page';
import Feature from './ui/Feature';


// const manuItem = [
//     {
//         title: "Phones & Tablets", brands: [
//             { name: "Apple", href: "apple" },
//             { name: "Samsung", href: "samsung" },
//             { name: "Sony", href: "sony" },
//             { name: "Microsoft", href: "microsoft" },
//             { name: "Dell", href: "dell" },
//             { name: "Lenovo", href: "lenovo" },
//             { name: "HP", href: "hp" },
//             { name: "Asus", href: "asus" }
//         ]
//     },
//     { title: "Laptop & Desktop", },
//     { title: "Sound Equipment", },
//     { title: "Power & Accessories", },
//     { title: "Fitness & Wearable", },
//     { title: "Peripherals", },
//     { title: "Cover & Glass", },
//     { title: "Smart Electronics", },
//     { title: "Used Device", },
//     { title: "Blog", },
// ];

// console.log(manuItem);

const Navber = () => {
    return (
        <div>
            <Navber1 />
            <MaunItems/>
            <MobileView />
        </div>


    );
};

export default Navber;