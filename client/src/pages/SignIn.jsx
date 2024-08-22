import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice.js';
import OAuth from '../components/OAuth.jsx';

export default function SignIn() {
    const [formData, setFormData] = React.useState({});
    const { error, loading } = useSelector((state) => state.user);
    // const [error, setError] = React.useState(null);
    // const [loading, setLoading] = React.useState(false);
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
            // setLoading(true);

            const res = await fetch('http://localhost:3000/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();

            if (data.success === false) {

                dispatch(signInFailure(data.message));
                // setError(data.message);
                // setLoading(false);
                return;
            }
            dispatch(signInSuccess(data));
            // setLoading(false);
            // setError(null);

            navigate('/');

        } catch (error) {
            dispatch(signInFailure(error.message));
            // setLoading(false);
            // setError(error.message);
        }

    };

    return (
        <div className='p-4 min-h-screen mt-20'>
            <h1 className='text-3xl text-center font-semibold my-7 text-dark-500'>
                LOGIN
            </h1>

            <form className='mt-4 gap-5' onSubmit={handleSubmit}>
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
                        {loading ? 'Loading...' : 'LOGIN'}
                    </button>
                </div>
                <div className='flex flex-col max-w-md mx-auto p-3'>
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