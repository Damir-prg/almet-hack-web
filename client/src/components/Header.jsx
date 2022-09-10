import React from 'react';
import MyButton from './UI/Button/MyButton';

const Header = ({children}) => {
    return (
        <div className='header'>
            <MyButton>
                {children}
            </MyButton>
        </div>
    );
};

export default Header;