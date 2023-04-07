import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FriendsDetails = () => {
    const friend = useLoaderData();
    const navigation = useNavigate();
    const handleGoBack = () => {
        navigation(-1);
    }
    return (
        <div className='p-4'>
            <div className='border p-3 text-center  bg-green-300'>
                <h2>Name:{friend.name}</h2>
                <h2>Email:{friend.email}</h2>
                <button onClick={handleGoBack}>Go Back</button>
            </div>
        </div>
    );
};

export default FriendsDetails;