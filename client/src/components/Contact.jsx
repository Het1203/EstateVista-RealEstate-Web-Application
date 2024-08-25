import React from 'react'
import { Link } from 'react-router-dom';

export default function Contact({ listing }) {
    const [owner, setOwner] = React.useState(null);
    const [message, setMessage] = React.useState('');

    React.useEffect(() => {
        const fetchOwner = async () => {
            try {
                const response = await fetch(`http://localhost:3000/user/${listing.userRef}`, {
                    credentials: 'include',
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();
                setOwner(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchOwner();
    }, [listing.userRef]);

    const onChange = (e) => {
        setMessage(e.target.value);
    }

    return (
        <div>
            {owner && (
                <div className='mt-5'>

                    <div className='text-center'>
                        Contact <span className='ml-1 font-semibold'>{owner.username}</span>
                        <span className='ml-1'>for</span>
                        <span className='ml-1 font-semibold'>
                            {listing.name}
                        </span>
                    </div>

                    <div className='flex flex-col items-center'>
                        <textarea
                            className='focus:outline-none w-full md:w-[70%] border p-5 rounded-lg mt-5'
                            placeholder='Enter your message here...'
                            name='message' id='message' rows="2" value={message} onChange={onChange}>
                        </textarea>

                        <Link to={`mailto:${owner.email}?subject=Regarding ${listing.name}&body=${message}`} className='w-full md:w-[70%] bg-gray-700 text-white hover:opacity-80 text-center p-3 rounded-lg mt-5'>
                            Send Message
                        </Link>
                    </div>
                </div>

            )}
        </div>
    )
}
