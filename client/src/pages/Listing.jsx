import React from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import { useSelector } from 'react-redux';
import {
    FaBath,
    FaBed,
    FaChair,
    FaMapMarkedAlt,
    FaMapMarkerAlt,
    FaParking,
    FaShare,
} from 'react-icons/fa';
import Contact from '../components/Contact';

export default function Listing() {
    SwiperCore.use([Navigation]);
    const params = useParams();
    const currentUser = useSelector(state => state.user.currentUser);
    const [listing, setListing] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [copied, setCopied] = React.useState(false);
    const [contact, setContact] = React.useState(false);

    React.useEffect(() => {
        const fetchListing = async () => {
            try {
                setLoading(true);
                const response = await fetch(`http://localhost:3000/listing/get/${params.listingId}`, {
                    credentials: 'include',
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();

                if (data.success === false) {
                    setError(true);
                    setLoading(false);
                    return;
                }
                setListing(data);
                setLoading(false);
                setError(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        }
        fetchListing();
    }, [params.listingId]);


    return (
        <main className='min-h-screen my-16'>
            {loading && <p className='text-center text-2xl'>Loading...</p>}
            {error && <p className='text-center text-2xl'>Error fetching listing</p>}

            {listing && !loading && !error && (
                <>
                    <Swiper navigation={true}>
                        {listing.imageUrls.map((url) => (
                            <SwiperSlide key={url}>
                                <div className='h-[500px]' style={{ background: `url(${url}) center no-repeat`, backgroundSize: 'cover' }}>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className='fixed top-[13%] right-[3%] z-10 mt-10 mx-10 border rounded-full w-12 h-12 flex justify-center items-center bg-white cursor-pointer'>
                        <FaShare
                            className='text-slate-500'
                            onClick={() => {
                                navigator.clipboard.writeText(window.location.href);
                                setCopied(true);
                                setTimeout(() => {
                                    setCopied(false);
                                }, 2000);
                            }}
                        />
                    </div>

                    {copied && (
                        <p className='fixed top-[24%] right-[4%] z-10 mt-5 rounded-md bg-gray-100 p-2'>
                            Link copied!
                        </p>
                    )}

                    <div className='flex flex-col max-w-4xl mx-auto p-3 my-7 gap-4'>
                        <p className='text-3xl text-black uppercase'>
                            {listing.name} - ₹{' '}
                            {listing.offer
                                ? (listing.discountedPrice ? listing.discountedPrice.toLocaleString('en-IN') : 'N/A')
                                : (listing.regularPrice ? listing.regularPrice.toLocaleString('en-IN') : 'N/A')}
                            {listing.type === 'rent' && '/month'}
                        </p>

                        <p className='flex items-center mt-2 gap-2 text-blue-900'>
                            <FaMapMarkerAlt className='text-green-700' />
                            <span className='font-semibold text-gray-800'>{listing.address}</span>
                        </p>

                        <div className='flex gap-4 items-center mt-2'>
                            <p className='bg-green-900 w-full max-w-[200px] text-white text-center p-2 rounded-lg shadow-lg'>
                                {listing.type === 'rent' ? 'For Rent' : 'For Sale'}
                            </p>
                            {listing.offer && (
                                <p className='bg-red-700 w-full max-w-[200px] text-white text-center p-2 rounded-lg shadow-lg'>
                                    ₹{(listing.regularPrice && listing.discountedPrice ? (+listing.regularPrice - +listing.discountedPrice).toLocaleString('en-IN') : 'N/A')} DISCOUNT
                                </p>
                            )}
                        </div>

                        <div className=' text-gray-800 font-semibold text-black mt-2'>
                            Description:
                        </div>
                        <p className='text-gray-800'>
                            {listing.description}
                        </p>

                        <ul className='text-green-900 font-semibold text-sm flex flex-wrap items-center gap-4 sm:gap-6 mt-2'>
                            <li className='flex items-center gap-1 whitespace-nowrap '>
                                <FaBed className='text-lg' />
                                {listing.bedrooms > 1
                                    ? `${listing.bedrooms} beds `
                                    : `${listing.bedrooms} bed `}
                            </li>
                            <li className='flex items-center gap-1 whitespace-nowrap '>
                                <FaBath className='text-lg' />
                                {listing.bathrooms > 1
                                    ? `${listing.bathrooms} baths `
                                    : `${listing.bathrooms} bath `}
                            </li>
                            <li className='flex items-center gap-1 whitespace-nowrap '>
                                <FaParking className='text-lg' />
                                {listing.parking ? 'Parking spot' : 'No Parking'}
                            </li>
                            <li className='flex items-center gap-1 whitespace-nowrap '>
                                <FaChair className='text-lg' />
                                {listing.furnished ? 'Furnished' : 'Unfurnished'}
                            </li>
                        </ul>

                        {currentUser && listing.userRef !== currentUser._id && !contact && (
                            <button
                                onClick={() => setContact(true)}
                                className='bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 p-3'
                            >
                                Contact landlord
                            </button>
                        )}

                        {contact && <Contact listing={listing} />}
                    </div>
                </>
            )}
        </main>
    );
}