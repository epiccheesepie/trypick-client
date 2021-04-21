import React from 'react';
import './Header.css';

const Header = ({title, text}) => {

    return (
        <div className="header">
            <div className="header__logo">
                <a className="header__link" href="/" alt="Главная">
                    <img className="logo" src="/img/logo.png" alt="logo" />
                </a>
            </div>
            <div className="header__main-text">
                <span className="header__title">
                    {title}
                </span>
                <span className="header__description">
                    {text}
                </span>
            </div>
        </div>
    );
}


export default Header;