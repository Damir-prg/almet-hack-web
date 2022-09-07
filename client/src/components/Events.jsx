import React, { useState } from 'react';
import MyInput from './UI/Input/MyInput'
import Slider from './UI/Slider/Slider';
import setting_img from "../images/settings.png";
import Event from './Event';

const Events = () => {

    return (
        <div className='container'>
            <Slider/>
            <div className='container__input'>
                <MyInput placeholder="Поиск"/>
                <img alt='img' src={setting_img}/>
            </div>
            <Event>Карточка с контентом 1</Event>
            <Event>Карточка с контентом 2</Event>
            <Event>Карточка с контентом 3</Event>
            <Event>Карточка с контентом 4</Event>
            <Event>Карточка с контентом 5</Event>
        </div>
    );
};

export default Events;