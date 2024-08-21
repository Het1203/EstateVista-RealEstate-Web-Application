import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <header className='fixed top-0 left-0 w-full shadow-md bg-white z-50'>
                <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>

                    <Link to='/'>
                        <h1 className='font-bold text-sm md:text-2xl flex flex-wrap'>
                            <span className='text-gray-500'>Estate </span>
                            <span className='text-gray-700'>Vista</span>
                        </h1>
                    </Link>

                    <form className='p-2 border border-gray-300 rounded-lg flex items-center'>
                        <input type='text' placeholder='Search' className='bg-transparent focus:outline-none w-24 md:w-64 text-dark-400' />
                        <FaSearch className='text-gray-500' />
                    </form>

                    <ul className='flex gap-6'>
                        <Link to='/home'>
                            <li className='hidden md:inline text-dark-600'>
                                Home
                            </li>
                        </Link>
                        <Link to='/about'>
                            <li className='hidden md:inline text-dark-600'>
                                About
                            </li>
                        </Link>
                        <Link to='/contact'>
                            <li className='hidden md:inline text-dark-600'>
                                Contact
                            </li>
                        </Link>
                        <Link to='/signin'>
                            <li className='text-dark-600'>
                                Login
                            </li>
                        </Link>
                    </ul>
                </div>
            </header>
        </>
    )
}