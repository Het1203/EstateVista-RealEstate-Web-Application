import React from 'react'
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';

export default function Listing() {
    SwiperCore.use([Navigation]);
    const params = useParams();
    const [listing, setListing] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);

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
        fetchListing()
    }, [params.listingId]);
    return (
        <main className='min-h-screen my-16'>
            {loading && <p className='text-center text-2xl'>Loading...</p>}
            {error && <p className='text-center text-2xl'>Error fetching listing</p>}

            {listing && !loading && !error && (
                <>
                    <Swiper navigation={true} >
                        {listing.imageUrls.map((url) => (
                            <SwiperSlide key={url} >
                                <div className='h-[500px]' style={{ background: `url(${url}) center no-repeat`, backgroundSize: 'cover' }}>
                                    {/* <img src={url} alt='listing' className='w-full h-96 object-cover' /> */}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>
            )}
        </main>
    )
}
