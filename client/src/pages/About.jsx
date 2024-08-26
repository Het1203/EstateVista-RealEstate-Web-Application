import React from 'react';

export default function About() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
                <div className='py-20 px-4 max-w-6xl mt-20 mx-auto'>
                    <h1 className='text-4xl font-bold mb-4 text-gray-800'>About <span className='text-gray-600'>Estate</span><span className='text-gray-800'>Vista</span></h1>
                    <p className='mb-4 text-slate-700'>EstateVista is your trusted partner in the real estate market, dedicated to helping you find your dream home. Whether you are looking to buy, sell, or rent properties, our platform offers a seamless and user-friendly experience.</p>
                    <p className='mb-4 text-slate-700'>
                        Our mission is to simplify the real estate process by providing comprehensive listings, and detailed property information. We strive to make your property search as efficient and enjoyable as possible, ensuring you have all the tools and information you need to make informed decisions.
                    </p>
                    <p className='mb-4 text-slate-700'>At EstateVista, we believe that finding a new home should be an exciting journey. Our team is committed to delivering exceptional service and support, guiding you through every step of the process. Join us and discover the EstateVista difference today.</p>
                </div>
            </div>
        </div>
    );
}