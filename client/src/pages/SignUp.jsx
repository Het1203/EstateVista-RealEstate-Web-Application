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
            <h1 className='text-3xl text-center font-semibold my-7 text-dark-500'>
                REGISTER
            </h1>

            <form className='mt-4 gap-5' onSubmit={handleSubmit}>
                <div className='flex flex-col max-w-md mx-auto p-3'>
                    <label htmlFor='username' className='text-xl text-gray-700'>
                        Username:
                    </label>
                    <input type='text' id="username" placeholder='Enter your username' className='border border-gray-300 mt-2 p-2 rounded-lg focus:outline-none' onChange={handleChange} />
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
                    <button type='submit' disabled={loading} className='bg-gray-700 text-white p-2 rounded-lg mt-2 hover:opacity-95 disabled:opacity-80'>
                        {loading ? 'Loading...' : 'REGISTER'}
                    </button>
                </div>
                <div className='flex flex-col max-w-md mx-auto p-3'>
                    <OAuth />
                </div>
            </form>
            <div>
                <p className='text-center text-gray-500'>
                    Already have an account? <a href='/signin' className='text-blue-500'>Login</a>
                </p>
            </div>
            {error && <p className='text-red-500 text-center mt-5'> {error} </p>}
        </div>
    );
}