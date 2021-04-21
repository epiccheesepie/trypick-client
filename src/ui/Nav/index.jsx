import React from 'react';
import { menu } from '../../text';
import './Nav.css';

const Nav = ({onClickButton}) => {

    const [navOpen, setNavOpen] = React.useState(true);
    const updateDimensions = () => {
        const width = window.innerWidth;
        if (width < 1030) {
            setNavOpen(false);
        } else {
            setNavOpen(true);
        }
    };
    React.useState(_ => {
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
    }, []);

    return (
        <div className="nav">
            <MoveButton 
                handler={onClickButton}
            />
            <div className="content__container nav__wrap">
                <div className="ycc-big">
                    <a className="ycc-big__link" href="/" alt="youcanchoose">YCC</a>
                </div>
                <Menu 
                    navOpen={navOpen}
                />
            </div>
            {!navOpen && <Burger />}
        </div>
    );
}

const Menu = ({navOpen}) => {

    const renderItemsMenu = menu.map(({title, search}) => {
        return (
            <ItemMenu
                key={title}
                title={title}
                search={search}
            />
        );
    });

    return (
        <div className="nav__list">
            {navOpen && renderItemsMenu}
        </div>
    );
};

const MoveButton = ({handler}) => {
    
    return (
        <div className="square-button square-button--move" onClick={handler}>
            <img className="square-button__icon" src="/img/icon_arrow.png" alt="icon_move" />
        </div>
    );
};

const Links = ({search}) => {
    const renderLinks = search.map(({title, link}) => {
        return (
            <li key={link} className="nav__item">
                <a className="nav__link" href={link}>{title}</a>
            </li>
        );
    }); 

    return (
        <React.Fragment>
            {renderLinks}
        </React.Fragment>
    );
};

const ItemMenu = ({title, search}) => {

    const [itemOpen, setItemOpen] = React.useState(false);
    const handleEnterHidden = _ => {
        setItemOpen(true);
    };
    const handleLeaveHidden = _ => {
        setItemOpen(false);
    };

    return (
        <div className="nav__block" onMouseEnter={handleEnterHidden} onMouseLeave={handleLeaveHidden}>
            <div className="nav__title">
                <span>{title}</span>
            </div>
            {itemOpen && (
            <ul className="nav__hidden nav__shadow">
                <Links 
                    search={search}
                />
            </ul>
            )}
        </div>
    );
};

const Burger = () => {

    const handlerMouseOver = _ => {
        document.body.style.overflow = "hidden";
    };
    const handlerMouseOut = _ => {
        document.body.style.overflow = "visible";
    }

    const [openBurger, setOpenBurger] = React.useState(false);
    const handlerClick = () => {
        setOpenBurger(prev => !prev);
    };

    const renderItemsMenu = menu.map(({title, search}) => {
        return (
            <SmallItemMenu
                key={title}
                title={title}
                search={search}Small
            />
        );
    });

    return (
        <div className={`nav__right ${openBurger ? 'open-burger' : ''}`}>
            <div className="square-button square-button--burger" onClick={handlerClick}>
                <div></div>
                <div></div> 
            </div>
            <div className="nav__small nav__shadow" onMouseOver={handlerMouseOver} onMouseOut={handlerMouseOut}>
                {renderItemsMenu}
            </div>
        </div>
    );
};

const SmallItemMenu = ({title, search}) => {

    return (
        <div className="nav__block">
            <div className="nav__title">
                <span>{title}</span>
            </div>
            <ul className="nav__hidden">
                <Links 
                    search={search}
                />
            </ul>
        </div>
    );
};

export default Nav;