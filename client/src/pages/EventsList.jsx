import React from 'react';
import Events from '../components/Events';
import Header from '../components/Header';
import Slider from '../components/Slider';
import PostService from '../API/PostService'
import {useEvents} from '../hooks/useEvents'
import EventFilter from '../components/EventFilter';
import MyModal from '../components/UI/MyModal/MyModal'
import AdminFrom from '../components/AdminFrom';

const EventsList = () => {
    const [filter, setFilter] = React.useState({ sort: '', query: '' });
    const [events, setEvents] = React.useState([])
    const sortedAndSearchedEvents = useEvents(events, filter.sort, filter.query);
    console.log(filter)

    React.useEffect(() => {
        async function fetchData() {
            const response = await PostService.getAll();
            setEvents([...events, ...response.data])
        }
        fetchData();
    }, []);

    return (
        <div className='eventsList'>
            <Header/>
            <Slider />
            <EventFilter
                filter={filter}
                setFilter={setFilter}
            />
            <Events events={sortedAndSearchedEvents} />
        </div>
    );
};

export default EventsList;