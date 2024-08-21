import React from 'react'

export default function SignIn() {

    const [formData, setFormData] = React.useState({})

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };
    console.log(formData);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await res.json();
        console.log(data);
    };

    return (
        <div className='p-4 min-h-screen mt-20'>
            <h1 className='text-3xl text-center font-semibold my-7 text-dark-500'>
                SIGNIN
            </h1>

            <form className='mt-4 gap-5' onSubmit={handleSubmit}>
                <div className='flex flex-col max-w-md mx-auto p-3'>
                    <label htmlFor='name' className='text-xl text-gray-700'>
                        Username:
                    </label>
                    <input type='text' id='username' placeholder='Enter your username' className='border border-gray-300 mt-2 p-2 rounded-lg focus:outline-none' onChange={handleChange} />
                </div>
                <div className='flex flex-col max-w-md mx-auto p-3'>
                    <label htmlFor='email' className='text-xl text-gray-700'>
                        Email:
                    </label>
                    <input type='email' id='email' placeholder='Enter your email' className='border border-gray-300 mt-2 p-2 rounded-lg focus:outline-none' onChange={handleChange} />
                </div>
                <div className='flex flex-col max-w-md mx-auto p-3'>
                    <label htmlFor='password' className='text-xl text-gray-700'>
                        Password:
                    </label>
                    <input type='password' id='password' placeholder='Enter your password' className='border border-gray-300 mt-2 p-2 rounded-lg focus:outline-none' onChange={handleChange} />
                </div>
                <div className='flex flex-col max-w-md mx-auto p-3'>
                    <button className='bg-gray-700 text-white p-2 rounded-lg mt-2 hover:opacity-95 disabled:opacity-80'>
                        SIGNUP
                    </button>
                </div>
                <div>
                    <p className='text-center text-gray-500'>
                        Already have an account? <a href='/signin' className='text-blue-500'>Login</a>
                    </p>
                </div>
            </form>
        </div>
    )
}
