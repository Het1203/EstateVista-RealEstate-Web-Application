import React from 'react';
import { useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';

export default function SignUp() {
    const [formData, setFormData] = React.useState({});
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);

            const res = await fetch('http://localhost:3000/signup', {
                credentials: 'include',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();

            if (data.success === false) {
                setError(data.message);
                setLoading(false);
                return;
            }
            setLoading(false);
            setError(null);

            navigate('/signin');

        } catch (error) {
            setLoading(false);
            setError(error.message);
        }

    };

    return (
        <div className='p-4 min-h-screen mt-20'>
            <h1 className='text-3xl text-center font-semibold my-7 text-gray-800'>
                REGISTER
            </h1>

            <form onSubmit={handleSubmit} className='flex flex-col items-center bg-gray-800 max-w-md mx-auto shadow-lg p-6 rounded-lg'>
                <div className='flex flex-col max-w-md mx-auto p-2 w-full'>
                    <label htmlFor='username' className='block font-semibold text-white'>
                        Username:
                    </label>
                    <input type='text' id='username' placeholder='Enter your username' className='border border-gray-300 mt-2 p-2 rounded-lg focus:outline-none w-full sm:text-sm' onChange={handleChange} />
                </div>
                <div className='flex flex-col max-w-md mx-auto p-2 w-full'>
                    <label htmlFor='email' className='block font-semibold text-white'>
                        Email:
                    </label>
                    <input type='email' id='email' placeholder='Enter your email' className='border border-gray-300 mt-2 p-2 rounded-lg focus:outline-none w-full sm:text-sm' onChange={handleChange} />
                </div>
                <div className='flex flex-col max-w-md mx-auto p-2 w-full'>
                    <label htmlFor='password' className='block font-semibold text-white'>
                        Password:
                    </label>
                    <input type='password' id='password' placeholder='Enter your password' className='border border-gray-300 mt-2 p-2 rounded-lg focus:outline-none w-full sm:text-sm' onChange={handleChange} />
                </div>
                <div className='flex flex-col max-w-md mx-auto p-2 w-full'>
                    <button type='submit' disabled={loading} className='bg-gray-400 text-sm font-semibold text-white p-2 rounded-lg mt-3 mb-2 hover:opacity-95 w-full'>
                        {loading ? 'Loading...' : 'REGISTER'}
                    </button>
                </div>
                <div className='flex flex-col max-w-md mx-auto p-2 w-full'>
                    <OAuth />
                </div>
            </form>
            <div>
                <p className='text-center text-gray-500 mt-4'>
                    Already have an account? <a href='/signin' className='text-blue-500'>LOGIN</a>
                </p>
            </div>
            {error && <p className='text-red-500 text-center mt-5'> {error} </p>}
        </div>
    );
}