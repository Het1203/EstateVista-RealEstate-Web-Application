import React from 'react'

export default function SignUp() {
    return (
        <div className='p-4 min-h-screen mt-20'>
            <h1 className='text-3xl text-center font-semibold my-7 text-dark-500'>
                Sign-Up
            </h1>

            <form className='mt-4 gap-5'>
                <div className='flex flex-col max-w-md mx-auto p-3'>
                    <label htmlFor='name' className='text-xl text-gray-700'>
                        Username:
                    </label>
                    <input type='text' id='name' placeholder='Enter your username' className='border border-gray-300 mt-2 p-2 rounded-lg focus:outline-none' />
                </div>
                <div className='flex flex-col max-w-md mx-auto p-3'>
                    <label htmlFor='email' className='text-xl text-gray-700'>
                        Email:
                    </label>
                    <input type='email' id='email' placeholder='Enter your email' className='border border-gray-300 mt-2 p-2 rounded-lg focus:outline-none' />
                </div>
                <div className='flex flex-col max-w-md mx-auto p-3'>
                    <label htmlFor='password' className='text-xl text-gray-700'>
                        Password:
                    </label>
                    <input type='password' id='password' placeholder='Enter your password' className='border border-gray-300 mt-2 p-2 rounded-lg focus:outline-none' />
                </div>
                <div className='flex flex-col max-w-md mx-auto p-3'>
                    <button className='bg-gray-700 text-white p-2 rounded-lg mt-2'>
                        Sign-Up
                    </button>
                </div>
            </form>
        </div>
    )
}
