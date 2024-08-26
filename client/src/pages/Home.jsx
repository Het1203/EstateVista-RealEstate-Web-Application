import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';

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
        <div className='min-h-screen mt-20'>
            <div className='flex flex-col gap-6 p-20 px-3 max-w-6xl mx-auto'>
                <h1 className='text-gray-800 font-bold text-3xl lg:text-6xl'>
                    Welcome to <span className='text-gray-600'>Estate</span><span className='text-gray-800'>Vista</span>
                </h1>
                <div className='text-gray-500'>
                    EstateVista is your ultimate destination for finding the perfect home.
                    <br />
                    Explore a diverse range of properties tailored to your needs.
                </div>
                <Link
                    to={'/search'}
                    className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'
                >
                    Let's get started...
                </Link>
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
                                className='h-[500px]'
                            ></div>
                        </SwiperSlide>
                    ))}
            </Swiper>


            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 p-3 flex flex-col gap-8 my-10'>
                {offerListings && offerListings.length > 0 && (
                    <div className=''>
                        <div className='my-3'>
                            <h2 className='text-2xl font-semibold text-gray-700 uppercase'>Recent offers</h2>
                            <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
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
                            <h2 className='text-2xl font-semibold text-gray-700 uppercase'>Recent places for rent</h2>
                            <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
                        </div>
                        <div className='flex flex-wrap gap-4'>
                            {rentListings.map((listing) => (
                                <ListingItem listing={listing} key={listing._id} />
                            ))}
                        </div>
                    </div>
                )}
                {saleListings && saleListings.length > 0 && (
                    <div className=''>
                        <div className='my-3'>
                            <h2 className='text-2xl font-semibold text-gray-700 uppercase'>Recent places for sale</h2>
                            <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>Show more places for sale</Link>
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
