'use client'
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const FeaturedProducts = () => {
    return (
        <div>
            <div>
                <h3 className='text-center text-2xl'>Featured Products</h3>
            </div>
            <div className='flex justify-center my-16 text-orange-500'>
                <Tabs>
                    <TabList>
                        <Tab>BEST DEALS</Tab>
                        <Tab>BEST SELLERS</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default FeaturedProducts;