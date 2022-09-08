import React from 'react';

const Event = ({ children }) => {
    return (
        <div className='eventCard'>
            <div className='eventHeader'>
                <span className='manrope'>Учебные мероприятия</span>
                <span>АФ КНИТУ-КАИ</span>
                <h3>День учителя</h3>
            </div>
            <div className='eventBody'>
                <div className='eventBody__img'>
                    <img src="" alt="" />
                </div>
                <div className='eventBody__dsc'>
                    <div>
                        <div>
                            <h4>Описание</h4>
                            <p>День учителя - профессиональный праздник работников сферы образования.</p>
                        </div>
                        <div>
                            <h4>Дата</h4>
                            <p>5 октября 2022</p>
                        </div>
                        <div>
                            <h4>Место</h4>
                            <p>АФ КНИТУ-КАИ</p>
                        </div>
                    </div>
                    <p className='eventBody__price manrope'>Бесплатно</p>
                </div>
            </div>
        </div>
    );
};

export default Event;