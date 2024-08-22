import React from 'react';
import { useSelector } from 'react-redux';

export default function Profile() {
    const currentUser = useSelector(state => state.user.currentUser);

    return (
        <div className='p-4 min-h-screen mt-20'>
            <h1 className='text-3xl font-semibold text-center my-7 uppercase text-dark-500'>Profile</h1>

            <form className='flex flex-col items-center'>
                <div className='flex justify-center mb-4'>
                    <img src={currentUser.photo} alt='profile' className='rounded-full h-22 w-22 object-cover' />
                </div>

                <div className='flex flex-col max-w-md mx-auto p-3 w-full'>
                    <label htmlFor='email' className='text-xl text-gray-700'>
                        Email:
                    </label>
                    <input type='email' id='email' placeholder='Enter your email' className='border border-gray-300 mt-2 p-2 rounded-lg focus:outline-none w-full' />
                </div>

                <div className='flex flex-col max-w-md mx-auto p-3 w-full'>
                    <label htmlFor='password' className='text-xl text-gray-700'>
                        Password:
                    </label>
                    <input type='password' id='password' placeholder='Enter your password' className='border border-gray-300 mt-2 p-2 rounded-lg focus:outline-none w-full' />
                </div>

                <div className='flex flex-col max-w-md mx-auto p-3 w-full'>
                    <button type='submit' className='bg-gray-700 text-white p-2 rounded-lg mt-2 hover:opacity-95 w-full'>
                        Update Profile
                    </button>
                </div>

                <div className='flex justify-between max-w-md mx-auto p-3 w-full'>
                    <span className='text-red-600 cursor-pointer'>Delete Account</span>
                    <span className='text-red-600 cursor-pointer'>Logout</span>
                </div>
            </form>
        </div>
    );
}