import React from 'react';

export default function Footer() {
    return (
        <footer className='bg-gray-800 text-white py-16 bottom-0 w-full'>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='text-center md:text-left'>
                        <h2 className='text-xl font-bold'>EstateVista</h2>
                        <p className='text-sm'>Your trusted partner in the real estate market.</p>
                    </div>
                    <div className='mt-4 md:mt-0'>
                        <ul className='flex space-x-4'>
                            <li><a href='/about' className='hover:underline'>About Us</a></li>
                            <li><a href='/contact' className='hover:underline'>Contact</a></li>
                            <li><a href='/privacy' className='hover:underline'>Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-center space-x-6 mt-6 mb-6'>
                    <a href='https://facebook.com' className='text-white hover:text-gray-400'>
                        <i className='fab fa-facebook-f'></i>
                    </a>
                    <a href='https://instagram.com' className='text-white hover:text-gray-400'>
                        <i className='fab fa-instagram'></i>
                    </a>
                    <a href='https://twitter.com' className='text-white hover:text-gray-400'>
                        <i className='fab fa-twitter'></i>
                    </a>
                </div>
                <div className='mt-6 text-center'>
                    <p className='text-sm'>&copy; {new Date().getFullYear()} EstateVista. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}