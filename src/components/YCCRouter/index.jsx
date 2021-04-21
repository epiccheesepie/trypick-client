import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import { Redirect } from 'react-dom';

import { Main, NotFound, Random, Mood, Similar, Params } from '../../pages';
import { genres, genresGames, countries, canals, platforms, authors, developers, moods, year, duration, durationSeries, budget, typeGames } from '../../text';
import { Feature, Footer } from '../../components';
import { FilmSearch, SeriesSearch, GameSearch } from '../ItemSearch';

const links = [
   {
     type: 'films',
     typeRus: 'фильмы',
     View: FilmSearch,
     route: [
        {
            alias: 'random',
            title: 'случайный фильм',
            text: 'Выберите несколько параметров или просто нажмите кнопку, и Вам сгенерируется случайный фильм.',
            Page: Random,
            option: {
                selecters: [genres, countries, authors]
            },
            metaTitle: 'YouCanChoose - Случайный фильм',
            metaDescription: 'Генератор случайного фильма для просмотра по жанру или каналу - просто жми на кнопку!'
        },
        {
            alias: 'mood',
            title: 'поиск по настроению',
            text: 'Для лучшего поиска выберите не более трёх пунктов настроения просто кликнув по нужным.',
            Page: Mood,
            option: {
                moodBlocks: moods
            },
            metaTitle: 'YouCanChoose - Фильм под настроение',
            metaDescription: 'Поиск фильмов под настроения: рофляного, позитивного или мрачного, таинственного или грустного, депрессивного или воодушевленного, любовного или просто для хорошего настроения! Можно сочитать любые из списка!'
        },
        {
            alias: 'similar',
            title: 'похожий фильм',
            text: 'Алгоритм подберет похожие фильмы или по видимому сюжету, или по схожим вопросам, рассматриваемым в фильме.',
            Page: Similar,
            metaTitle: 'YouCanChoose - Поиск похожего фильма',
            metaDescription: 'Нейросеть определит похожий фильм по вашему запросу'
            
        },
        {
            alias: 'params',
            title: 'поиск по параметрам',
            text: 'Выберите любые параметры поиска и мы подберем для Вас фильм.',
            Page: Params,
            option: {
                selecters: [genres, countries, authors],
                sliders: [year, duration, budget]
            },
            metaTitle: 'YouCanChoose - Поиск фильма по параметрам',
            metaDescription: 'Подборки фильмов по выбранным параметрам: жанру, рейтингу, бюджету, автору, году выпуска или стране'
        }
     ] 
   },
   {
    type: 'series',
    typeRus: 'сериалы',
    View: SeriesSearch,
    route: [
       {
           alias: 'random',
           title: 'случайный сериал',
           text: 'Выберите несколько параметров или просто нажмите кнопку, и Вам сгенерируется случайный сериал.',
           Page: Random,
           option: {
            selecters: [genres, countries, canals]   
           },
            metaTitle: 'YouCanChoose - Случайный сериал',
            metaDescription: 'Выбери сериал от Netflix или Amazon, генератор случайного сериала для просмотра по жанру или каналу - просто жми на кнопку!'
       },
       {
           alias: 'mood',
           title: 'поиск по настроению',
           text: 'Для лучшего поиска выберите не более трёх пунктов настроения просто кликнув по нужным.',
           Page: Mood,
           option: {
            moodBlocks: moods
           },
           metaTitle: 'YouCanChoose - Сериал под настроение',
           metaDescription: 'Поиск фильмов под настроения: рофляного, позитивного или мрачного, таинственного или грустного, депрессивного или воодушевленного, любовного или просто для хорошего настроения! Можно сочитать любые из списка!'
       },
       {
           alias: 'similar',
           title: 'похожий сериал',
           text: 'Алгоритм подберет похожие сериалы или по видимому сюжету, или по схожим вопросам, рассматриваемым в сериале.',
           Page: Similar,
           metaTitle: 'YouCanChoose - Поиск похожего сериала',
           metaDescription: 'Нейросеть определит похожий сериал по вашему запросу'
       },
       {
           alias: 'params',
           title: 'поиск по параметрам',
           text: 'Выберите любые параметры поиска и мы подберем для Вас сериал.',
           Page: Params,
           option: {
               selecters: [genres, countries, canals],
               sliders: [year, durationSeries]
           },
           metaTitle: 'YouCanChoose - Поиск сериала по параметрам',
           metaDescription: 'Подборки сериалов по выбранным параметрам: жанру, каналу, длительности, году выпуска или стране'
       }
    ]  
  },
  {
    type: 'games',
    typeRus: 'игры',
    View: GameSearch,
    route: [
       {
           alias: 'random',
           title: 'случайная игра',
           text: 'Выберите несколько параметров или просто нажмите кнопку, и Вам сгенерируется случайная игра.',
           Page: Random,
           option: {
            selecters: [genresGames, platforms, developers]
           },
           metaTitle: 'YouCanChoose - Случайная игра',
           metaDescription: 'Генератор случайной игры на PC, Xbox или PlayStation'
       },
       {
           alias: 'mood',
           title: 'поиск по настроению',
           text: 'Для лучшего поиска выберите не более трёх пунктов настроения просто кликнув по нужным.',
           Page: Mood,
           option: {
            moodBlocks: moods
           },
           metaTitle: 'YouCanChoose - Игра под настроение',
           metaDescription: 'Поиск игры под настроение'
       },
       {
           alias: 'similar',
           title: 'похожая игра',
           text: 'Алгоритм подберет похожие игры по жанрам и видимому сюжету.',
           Page: Similar,
           metaTitle: 'YouCanChoose - Поиск похожей игры',
           metaDescription: 'Нейросеть определит похожую игру по вашему запросу'
       },
       {
           alias: 'params',
           title: 'поиск по параметрам',
           text: 'Выберите любые параметры поиска и мы подберем для Вас игру.',
           Page: Params,
           option: {
               selecters: [genresGames, developers, platforms, typeGames],
               sliders: [year]
           },
           metaTitle: 'YouCanChoose - Поиск игры по параметрам',
           metaDescription: 'Подборки игр на PC, PlayStation или Xbox по выбранным параметрам: жанру, рейтингу, разработчику или режиму игры'
       }
    ]
  },
];

const YCCRouter = () => {

    const routers = [];
    links.forEach( ({type, typeRus, View, route}) => {
        const itemLinks = route.map( ({alias, title, text, Page, option, metaTitle, metaDescription}) => {
            return (
                <Route key={type} exact path={'/'+alias+'/'+type} render={(props) =>
                    <Feature View={View} type={type} alias={alias} title={title} text={text} typeRus={typeRus} metaTitle={metaTitle} metaDescription={metaDescription} >
                        {(setOption) => <Page {...props} option={option} setOption={setOption} />}
                    </Feature>
                } />
            );
        });

        routers.push(itemLinks);
    });
    
    return (
        <Switch>
            <Route exact path="/">
                <React.Fragment>
                    <Main />
                    <Footer page={false} />
                </React.Fragment>
            </Route>
                {routers}
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}

export default YCCRouter;