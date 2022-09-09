import React from 'react';
import SliderItem from './UI/Slider/SliderItem';
import stadion from '../images/stadion.jpeg'
import karakuz from '../images/karakuz.jpeg'
import kai from '../images/kai.jpeg'
import arrow from '../images/arrow.png'
import ArrowButton from './UI/ArrowButton/ArrowButton';
import { CSSTransition } from "react-transition-group";

const Slider = () => {
    const [sliderProps, setSliderProps] = React.useState([
        {
            backgroundText: 'Массовые мероприятия',
            subtitle: 'Фестиваль',
            title: 'Лето.KARAKUZ',
            description: 'В основе этнофестиваля Каракуз лежат многовековые традиции проведения ярмарок и уличных выступлений.',
            image: karakuz,
            bgColor: ''
        },
        {
            backgroundText: 'Площадки',
            subtitle: 'Популярные',
            title: 'Площадки города',
            description: 'Часто используемые площадки, для проведения мероприятий в городе.',
            image: stadion,
            bgColor: ''
        },
        {
            backgroundText: 'Учебное мероприятие',
            subtitle: 'АФ КНИТУ-КАИ',
            title: 'День учителя',
            description: 'День учителя - профессиональный праздник работников сферы образования.',
            image: kai,
            bgColor: ''
        }
    ])



    return (
        <div className='sliderContainer'>
            <SliderItem sliderProps={sliderProps[0]} />
            <div className='sliderCenter'>
                <ArrowButton arrow={arrow} isRight={false} />
                <ArrowButton arrow={arrow} isRight={true} />
                <SliderItem sliderProps={sliderProps[1]} arrow={arrow} isCenter={true} />
            </div>
            <SliderItem sliderProps={sliderProps[2]} />

        </div>
    );
};

export default Slider;