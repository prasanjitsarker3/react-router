import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({ friend }) => {
    const { email, name, id, phone } = friend;
    return (
        <div className='border p-3 m-2 gap-2 bg-slate-200 '>
            <div>
                <h3>Name: {name}</h3>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p><Link to={`/friend/${id}`}>Show Details</Link></p>
            </div>
        </div>
    );
};

export default Friend;