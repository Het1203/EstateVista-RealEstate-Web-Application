import React from 'react';

export default function Contact() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center">
            <div className="w-full max-w-md px-4">
                <h1 className="text-3xl font-bold mb-8 text-center text-slate-800 mt-10 uppercase">Contact Us</h1>
                <p className="mb-8 text-center text-slate-700">We'd love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.</p>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block font-semibold text-gray-700">Name</label>
                        <input type="text" id="name" placeholder='Enter your name' name="name" className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-semibold text-gray-700">Email</label>
                        <input type="email" id="email" placeholder='Enter your email' name="email" className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block font-semibold text-gray-700">Message</label>
                        <textarea id="message" name="message" placeholder='Enter your message' rows="4" className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-semibold rounded-md text-white bg-gray-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}