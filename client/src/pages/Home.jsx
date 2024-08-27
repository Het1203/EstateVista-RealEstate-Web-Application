import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';
import bgImage from '../assets/landingimg.jpg';

export default function Home() {
    const [offerListings, setOfferListings] = React.useState([]);
    const [saleListings, setSaleListings] = React.useState([]);
    const [rentListings, setRentListings] = React.useState([]);
    SwiperCore.use([Navigation]);

    React.useEffect(() => {
        const fetchOfferListings = async () => {
            try {
                const res = await fetch('http://localhost:3000/listing/get?offer=true&limit=6');
                const data = await res.json();
                setOfferListings(data);
                fetchRentListings();
            } catch (error) {
                console.log(error);
            }
        };
        const fetchRentListings = async () => {
            try {
                const res = await fetch('http://localhost:3000/listing/get?type=rent&limit=6');
                const data = await res.json();
                setRentListings(data);
                fetchSaleListings();
            } catch (error) {
                console.log(error);
            }
        };

        const fetchSaleListings = async () => {
            try {
                const res = await fetch('http://localhost:3000/listing/get?type=sale&limit=6');
                const data = await res.json();
                setSaleListings(data);
            } catch (error) {
                log(error);
            }
        };
        fetchOfferListings();
    }, []);

    return (
        <div className='min-h-screen mt-16'>
            <div style={{
                position: 'relative',
                width: '100%',
                height: '650px',
                overflow: 'hidden',
                boxSizing: 'border-box'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${bgImage})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    filter: 'blur(4px)',
                    zIndex: -1,
                    border: 'none',
                    margin: 'auto'
                }}></div>
                <div style={{
                    position: 'relative',
                    zIndex: 1,
                    padding: '20px',
                    maxWidth: '6xl',
                    margin: 'auto',
                    boxSizing: 'border-box'
                }}>
                    <h1 className='text-white font-bold text-3xl lg:text-6xl mt-32 px-20'>
                        Welcome to <span className='text-gray-600'>Estate</span><span className='text-gray-800'>Vista</span>
                    </h1>
                    <div className='text-white px-20 mb-20 mt-4'>
                        EstateVista is your ultimate destination for finding the perfect home.
                        <br />
                        Explore a diverse range of properties tailored to your needs.
                    </div>
                </div>
            </div>

            <div className='px-24 text-center mt-16'>
                <h2 className='text-black font-bold text-2xl lg:text-3xl'>
                    Discover More About Our Services
                </h2>
                <p className='text-gray-800 mt-4 px-24'>
                    At EstateVista, we offer a wide range of services to help you find your dream home.
                    From personalized property recommendations to expert advice on the real estate market,
                    we are here to assist you every step of the way.
                </p>
                <Link
                    to={'/search'}
                    className='text-xs sm:text-sm text-blue-700 font-bold hover:underline px-20'
                >
                    Let's get started...
                </Link>
                <div className='mt-6'>
                    <h3 className='text-black font-semibold text-xl lg:text-2xl'>
                        Our Key Features
                    </h3>
                    <ul className='text-gray-800 mt-4 list-disc list-inside'>
                        <li>Personalized Property Recommendations</li>
                        <li>Expert Real Estate Advice</li>
                        <li>Comprehensive Market Analysis</li>
                    </ul>
                </div>
            </div>

            <Swiper navigation>
                {offerListings &&
                    offerListings.length > 0 &&
                    offerListings.map((listing) => (
                        <SwiperSlide key={listing._id}>
                            <div
                                style={{
                                    background: `url(${listing.imageUrls[0]}) center no-repeat`,
                                    backgroundSize: 'cover',
                                }}
                                className='mt-5 md:m-20 h-[300px] md:h-[600px]'
                            ></div>
                        </SwiperSlide>
                    ))}
            </Swiper>


            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 p-3 flex flex-col gap-8'>
                {offerListings && offerListings.length > 0 && (
                    <div>
                        <div className='my-3'>
                            <h2 className='text-2xl font-semibold text-gray-800 uppercase'>Recent offers</h2>
                            <Link className='text-sm text-blue-700 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
                        </div>
                        <div className='flex flex-wrap gap-4'>
                            {offerListings.map((listing) => (
                                <ListingItem listing={listing} key={listing._id} />
                            ))}
                        </div>
                    </div>
                )}
                {rentListings && rentListings.length > 0 && (
                    <div className=''>
                        <div className='my-3'>
                            <h2 className='text-2xl font-semibold text-gray-800 uppercase'>Recent places for rent</h2>
                            <Link className='text-sm text-blue-700 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
                        </div>
                        <div className='flex flex-wrap gap-4'>
                            {rentListings.map((listing) => (
                                <ListingItem listing={listing} key={listing._id} />
                            ))}
                        </div>
                    </div>
                )}
                {saleListings && saleListings.length > 0 && (
                    <div className='mb-10'>
                        <div className='my-3'>
                            <h2 className='text-2xl font-semibold text-gray-800 uppercase'>Recent places for sale</h2>
                            <Link className='text-sm text-blue-700 hover:underline' to={'/search?type=sale'}>Show more places for sale</Link>
                        </div>
                        <div className='flex flex-wrap gap-4'>
                            {saleListings.map((listing) => (
                                <ListingItem listing={listing} key={listing._id} />
                            ))}
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
};
