import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice.js';
import OAuth from '../components/OAuth.jsx';

export default function SignIn() {
    const [formData, setFormData] = React.useState({});
    const { error, loading } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            dispatch(signInStart());

            const res = await fetch('http://localhost:3000/signin', {
                credentials: 'include',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();

            if (data.success === false) {

                dispatch(signInFailure(data.message));
                return;
            }
            dispatch(signInSuccess(data));
            navigate('/');

        } catch (error) {
            dispatch(signInFailure(error.message));
        }

    };

    return (
        <div className='p-4 min-h-screen mt-20'>
            <h1 className='text-3xl text-center font-semibold my-7 text-gray-800'>
                LOGIN
            </h1>

            <form onSubmit={handleSubmit} className='flex flex-col items-center bg-gray-800 max-w-md mx-auto shadow-lg p-6 rounded-lg mb-5'>
                <div className='flex flex-col max-w-md mx-auto p-2 w-full mt-2'>
                    <label htmlFor='email' className='block font-semibold text-white'>
                        Email:
                    </label>
                    <input type='email' id='email' placeholder='Enter your email' className='border border-gray-300 mt-2 p-2 rounded-lg focus:outline-none w-full sm:text-sm' onChange={handleChange} />
                </div>
                <div className='flex flex-col max-w-md mx-auto p-2 w-full mt-2 mb-2'>
                    <label htmlFor='password' className='block font-semibold text-white'>
                        Password:
                    </label>
                    <input type='password' id='password' placeholder='Enter your password' className='border border-gray-300 mt-2 p-2 rounded-lg focus:outline-none w-full sm:text-sm' onChange={handleChange} />
                </div>
                <div className='flex flex-col max-w-md mx-auto p-2 w-full'>
                    <button type='submit' disabled={loading} className='bg-gray-400 text-sm font-semibold text-white p-2 rounded-lg mt-3 hover:opacity-95 w-full'>
                        {loading ? 'Loading...' : 'LOGIN'}
                    </button>
                </div>
                <div className='flex flex-col max-w-md mx-auto p-2 mt-3 w-full'>
                    <OAuth />
                </div>
            </form>
            <div>
                <p className='text-center text-gray-500'>
                    Dont have an account? <a href='/signup' className='text-blue-500'>REGISTER</a>
                </p>
            </div>
            {error && <p className='text-red-500 text-center mt-5'> {error} </p>}
        </div>
    );
}