import React from 'react';
import MetaTags from 'react-meta-tags';
import './Feature.css';

import { Header, SearchButton, ShowMoreButton, FamousCheckbox, Nav } from '../../ui';

const Feature = ({View, type, alias, title, text, typeRus, metaTitle, metaDescription, children}) => {

    const handlerMouseOver = _ => {
        document.body.style.overflow = "hidden";
    };
    const handlerMouseOut = _ => {
        document.body.style.overflow = "visible";
    }

    const [openFeature, setOpenFeature] = React.useState(true);
    const handleOpen = _ => {
        setOpenFeature(prev => !prev);
    };

    const [request, setRequest] = React.useState({
        option: null,
        famous: false
    });
    const handleClickFamous = _ => {
        setRequest(prev => {
            return {
                ...prev,
                famous: !prev.famous
            };
        });
    };
    const handleSetOption = (option) => {
        setRequest(prev => {
            return {
                ...prev,
                option
            };
        });
    };


    /* подгруз данных */
    const limitSearch = 5; //лимит на загрузку
    const [itemsSearch, setItemsSearch] = React.useState([]); //массив элементов из базы
    const [pointerSearch, setPointerSearch] = React.useState(limitSearch); //указатель на количество загружаемых
    const [loadingBlur, setLoadingBlur] = React.useState(false); //эффект блюра для красоты
    /* подгруз данных */

    const timeoutBlur = () => {
        setTimeout(() => {
            setLoadingBlur(false);
        }, 400);
    };

    const handleSubmit = (e, limit) => {
        e.preventDefault();
        setLoadingBlur(true);
        request.pointer = limit;

        fetch(`http://youcanchoose:80/${alias}/${type}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        }).then(res => {
            res.json().then(res => {               
                setItemsSearch(res);
                setPointerSearch(prev => prev + limitSearch);
                timeoutBlur();
            });
        }).catch(err => {
            console.log(err);
        });
    };

    const dropPointerHandler = () => { //сброс указателя, при новых данных формы
        setPointerSearch(limitSearch);
    };
    const dropMenuMobileHandler = () => { //убирание левого меню на смартфонах после отправки формы
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            setOpenFeature(false);
        }
    };
    const scrollHandler = () => { //плавный скролл наверх, при новых данных формы
        document.getElementById('top').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    return (
        <div  id="top" className={`content ${type} ${!openFeature ? 'full' : 'small'}`}>
            <MetaTags>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} />
            </MetaTags>
            <Nav
                onClickButton={handleOpen}
            />
            <div className="interface" onMouseOver={handlerMouseOver} onMouseOut={handlerMouseOut}>
                <form id={alias} className="interface__wrap" onSubmit={(e) => handleSubmit(e, limitSearch)}>
                    <Header 
                        title={title}
                        text={text}
                    />
                    {children(handleSetOption)}
                    <div className="interface__bot">
                        <FamousCheckbox 
                            typeRus={typeRus}
                            onClick={handleClickFamous}
                            famousCheck={request.famous}
                        />
                        <SearchButton
                            dropPointer={dropPointerHandler}
                            dropMobile={dropMenuMobileHandler}
                            scroll={scrollHandler}
                        />
                    </div>
                </form>
            </div>
            <div className="view">
                {itemsSearch.length && (
                    <div className="content__container view__list">
                        <div className={`list__items ${loadingBlur ? 'blur' : ''}`}>
                            {itemsSearch.map((options) => {
                                return (
                                    <View
                                        options={options}
                                    />
                                );
                            })}
                        </div>
                        {(!(itemsSearch.length % limitSearch) || (alias === 'random')) && (
                            <ShowMoreButton
                                onClick={handleSubmit}
                                pointer={pointerSearch}
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Feature;