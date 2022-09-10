import React from 'react';

const Event = ({children}) => {
    return (
        <div className='event'>
            <h1>{children}</h1>
        </div>
    );
};

export default Event;