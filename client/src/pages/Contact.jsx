import React, { useState } from 'react';

export default function Contact() {
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        // Client-side validation
        if (!data.name || !data.email || !data.message) {
            setError('All fields are required.');
            setMessage('');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/contact/contactus', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const result = await response.json();
                setMessage('Your message has been received. The team will contact on your email!');
                setError('');
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Something went wrong!');
                setMessage('');
            }
        } catch (error) {
            setError('Failed to send message. Please try again later.');
            setMessage('');
        }
    };

    return (
        <div className="flex flex-col min-h-screen mt-10 items-center justify-center">
            <div className="w-full max-w-md px-4">
                <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 mt-5 uppercase">Contact Us</h1>
                <p className="mb-8 text-center text-slate-700">We'd love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.</p>
                <form onSubmit={handleSubmit} className="flex flex-col items-center max-w-md mx-auto bg-white shadow-lg p-6 rounded-lg space-y-4">
                    <div className="w-full">
                        <label htmlFor="name" className="block font-semibold text-gray-700">Name:</label>
                        <input type="text" id="name" placeholder='Enter your name' name="name" className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none sm:text-sm" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="email" className="block font-semibold text-gray-700">Email:</label>
                        <input type="email" id="email" placeholder='Enter your email' name="email" className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none sm:text-sm" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="message" className="block font-semibold text-gray-700">Message:</label>
                        <textarea id="message" name="message" placeholder='Enter your message' rows="4" className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none sm:text-sm"></textarea>
                    </div>
                    <div className="w-full">
                        <button type="submit" className="w-full inline-flex justify-center py-2 px-4 hover:opacity-95 text-sm font-semibold rounded-md text-white bg-gray-700 focus:outline-none">
                            Send Message
                        </button>
                    </div>
                </form>

                {message && <p className="mt-4 mb-4 text-center text-green-600">{message}</p>}
                {error && <p className="mt-4 mb-4 text-center text-red-600">{error}</p>}
            </div>
        </div>
    );
}