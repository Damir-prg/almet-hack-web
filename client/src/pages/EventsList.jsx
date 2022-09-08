import React from 'react';
import Events from '../components/Events';
import Header from '../components/Header';

const EventsList = () => {
    return (
        <div className='eventsList'>
            <Header/>
            <Events/>
        </div>
    );
};

export default EventsList;