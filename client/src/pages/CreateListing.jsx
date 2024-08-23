import React from 'react'

export default function CreateListing() {
    return (
        <>
            <div className='p-4 min-h-screen mt-20'>
                <main className='p-3 max-w-4xl mx-auto'>
                    <h1 className='text-3xl font-semibold text-center my-7 uppercase'>
                        Create Listing
                    </h1>

                    <form>
                        <div className='flex flex-col md:flex-row md:gap-10'>
                            <div className='flex flex-col md:w-1/2'>
                                <div className='flex flex-col max-w-md mx-auto p-3 w-full'>
                                    <label htmlFor='name' className='text-xl text-gray-700'>
                                        Name:
                                    </label>
                                    <input type='text' id='name' placeholder='Name' className='border border-gray-300 mt-2 p-2 rounded-lg focus:outline-none w-full' />
                                </div>
                                <div className='flex flex-col max-w-md mx-auto p-3 w-full'>
                                    <label htmlFor='description' className='text-xl text-gray-700'>
                                        Description:
                                    </label>
                                    <textarea
                                        id='description'
                                        placeholder='Description'
                                        className='border border-gray-300 mt-2 p-2 rounded-lg focus:outline-none w-full'
                                        rows='4'
                                    />
                                </div>
                                <div className='flex flex-col max-w-md mx-auto p-3 w-full mb-5'>
                                    <label htmlFor='address' className='text-xl text-gray-700'>
                                        Address:
                                    </label>
                                    <input type='text' id='address' placeholder='Address' className='border border-gray-300 mt-2 p-2 rounded-lg focus:outline-none w-full' />
                                </div>
                            </div>

                            <div className='flex flex-col md:w-1/2 md:mt-7'>
                                <div className='text-gray-700 flex max-w-md mx-auto w-full flex-wrap gap-5 m-5'>
                                    <div className='flex gap-2'>
                                        <input type="checkbox" id='sale' className='w-5' />
                                        <label htmlFor='sale'>
                                            Sell
                                        </label>
                                    </div>
                                    <div className='flex gap-2'>
                                        <input type="checkbox" id='rent' className='w-5' />
                                        <label htmlFor='rent'>
                                            Rent
                                        </label>
                                    </div>
                                    <div className='flex gap-2'>
                                        <input type="checkbox" id='parking' className='w-5' />
                                        <label htmlFor='parking'>
                                            Parking spot
                                        </label>
                                    </div>
                                    <div className='flex gap-2'>
                                        <input type="checkbox" id='furnished' className='w-5' />
                                        <label htmlFor='furnished'>
                                            Furnished
                                        </label>
                                    </div>
                                    <div className='flex gap-2'>
                                        <input type="checkbox" id='offer' className='w-5' />
                                        <label htmlFor='offer'>
                                            Offer
                                        </label>
                                    </div>
                                </div>

                                <div className='text-gray-700 flex flex-col max-w-md mx-auto w-full gap-5'>
                                    <div className='flex justify-between gap-5'>
                                        <div className='flex flex-col items-center'>
                                            <input type="number" id="bedrooms" min='1' max='10' required className='p-2 border border-gray-300 rounded-lg' />
                                            <label className='m-2' htmlFor="bedrooms">Bedrooms</label>
                                        </div>

                                        <div className='flex flex-col items-center'>
                                            <input type="number" id="bathrooms" min='1' max='10' required className='p-2 border border-gray-300 rounded-lg' />
                                            <label className='m-2' htmlFor="bathrooms">Bathrooms</label>
                                        </div>
                                    </div>

                                    <div className='flex justify-between gap-5'>
                                        <div className='flex flex-col items-center'>
                                            <input type="number" id="regularPrice" min='1' max='10' required className='p-2 border border-gray-300 rounded-lg' />
                                            <div className='flex flex-col items-center'>
                                                <p>Regular Price</p>
                                                <span className='text-xs'>(₹ / months)</span>
                                            </div>
                                        </div>

                                        <div className='flex flex-col items-center'>
                                            <input type="number" id="discountedPrice" min='1' max='10' required className='p-2 border border-gray-300 rounded-lg' />
                                            <div className='flex flex-col items-center'>
                                                <p>Discount Price</p>
                                                <span className='text-xs'>(₹ / months)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col flex-1 max-w-md mx-auto p-3 w-full'>
                            <div className='flex flex-col items-start gap-2'>
                                <p className='font-semibold block'>Upload Images:</p>
                                <span className='font-normal text-gray-600 block'>The first image will be the cover (max 6)</span>
                            </div>

                            <div className='mt-5 flex gap-4'>
                                <input className='p-3 border border-gray-300 rounded w-full' type="file" id="images" accept='image/*' multiple />
                                <button className='p-3 bg-green-700 text-white rounded uppercase hover:opacity-95'>
                                    Upload
                                </button>
                            </div>

                            <button className='p-3 px-20 bg-gray-700 mt-5 text-white rounded-lg uppercase hover:opacity-95'>Create listing</button>
                        </div>

                    </form>
                </main>
            </div>
        </>
    )
}