import React from 'react';
import cls from './Slider.module.css'
import stadion from './stadion.jpeg'

const Slider = ({cards}) => {

    return (
        <div className={cls.slider}>
            <span className={cls.backText}>Площадки</span>
            <div className={cls.items}>
                <div className={cls.items__text}>
                    <h2>Популярные</h2>
                    <h1>Площадки города</h1>
                    <p>Часто используемые площадки, для проведения мероприятий в городе</p>
                </div>
                <div className={cls.items__img}>
                    <img 
                        src={stadion} 
                        alt="img" 
                    />
                </div>
            </div>
        </div>
    );
};

export default Slider;