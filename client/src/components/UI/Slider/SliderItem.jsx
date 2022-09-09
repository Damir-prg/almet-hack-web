import React from 'react';
import cls from './SliderItem.module.css'

const SliderItem = ({ sliderProps, isCenter, arrow }) => {

    return (
        <div className={isCenter ? cls.sliderCenter : cls.slider}>
            <span className={cls.backText}>{sliderProps.backgroundText}</span>
            <div className={cls.items}>
                <div className={cls.items__text}>
                    <h2>{sliderProps.subtitle}</h2>
                    <h1>{sliderProps.title}</h1>
                    <p>{sliderProps.description}</p>
                </div>
                <div className={cls.items__img}>
                    <img
                        src={sliderProps.image}
                        alt="img"
                    />
                </div>
            </div>
        </div>
    );
};

export default SliderItem;