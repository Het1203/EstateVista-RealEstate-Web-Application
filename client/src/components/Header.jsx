import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
    const navigate = useNavigate();
    const currentUser = useSelector(state => state.user.currentUser);
    const [searchTerm, setSearchTerm] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('searchTerm', searchTerm);
        const searchQuery = urlParams.toString();
        navigate(`/search?${searchQuery}`);
    }

    React.useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchTermFromUrl = urlParams.get('searchTerm');
        if (searchTermFromUrl) {
            setSearchTerm(searchTermFromUrl);
        }
    }, [location.search]);

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

                    <form onSubmit={handleSubmit} className='p-2 border border-gray-300 rounded-lg flex items-center'>
                        <input type='text' placeholder='Search'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className='bg-transparent focus:outline-none w-24 md:w-64 text-dark-400' />
                        <button> <FaSearch className='text-gray-500' /> </button>
                    </form>

                    <ul className='flex gap-6'>
                        <Link to='/'>
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

                        {currentUser ? (
                            <Link to='/profile'>
                                <img className='rounded-full h-7 w-7 object-cover' src={currentUser.photo} alt='profile' />
                            </Link>
                        ) : (
                            <Link to='/signin'>
                                <li className='text-dark-600'>
                                    Login
                                </li>
                            </Link>
                        )}
                    </ul>
                </div>
            </header>
        </>
    );
}