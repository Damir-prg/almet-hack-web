import React from 'react';
import PostService from '../API/PostService';
import Events from '../components/Events';
import Header from '../components/Header';
import Slider from '../components/Slider';
import MyInput from '../components/UI/Input/MyInput'

const EventsList = () => {

    const res = PostService.getAll()
    console.log(res)

    return (
        <div className='eventsList'>
            <Header/>
            <Slider/>
            <div className='container__input'>
                <MyInput placeholder="Поиск"/>
            </div>
            <Events/>
        </div>
    );
};

export default EventsList;