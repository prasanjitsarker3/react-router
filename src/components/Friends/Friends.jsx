import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const friends=useLoaderData();
    return (
        <div className='text-center bg-cyan-300'>
            <h2>These are my friends{friends.length}</h2>
            <div>
                {
                    friends.map(friend => <Friend key={friends.id} friend={friend}></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;