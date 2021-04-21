//POPUPS
export const genres = {
    title: 'Жанры',
    data: ['Комедия','Фэнтези','Ужасы','Боевик','Детектив','Приключения','Фантастика','Драма','Мелодрама','Спорт','Криминал','Триллер','Биография','История','Военный','Мультфильм','Вестерн','Супергерои'],
    devider: '+'
};

export const genresGames = {
    title: 'Жанры',
    data: ['Интерактивное кино','Приключения','Экшен','Шутер','Стратегия','Хоррор','Постапокалипсис','Ролевая','Выживание','Симулятор','Аркада','Инди','Научная фантастика','Драма','Вестерн'],
    devider: '+'
};

export const countries = {
    title: 'Страны',
    data: ['США','Россия','Великобритания','Канада','Швеция','Германия','Колумбия','Дания'],
    devider: 'или'
};

export const canals = {
    title: 'Канал',
    data: ['Netflix','HBO','Amazon','Hulu','CBS','FOX','BBC','AMC','NBC','Showtime','Disney','ITV','Starz','The CW','USA'],
    devider: 'или'
};

export const developers = {
    title: 'Разработчик',
    data: ['Rockstar Games','Capcom','CD Project RED','Blizzard','Quantic Dream','Supermassive Games'],
    devider: 'или'
};

export const authors = {
    title: 'Автор',
    data: ['J.J. Abrams','Ridley Scott','Christopher Nolan','James Cameron','Disney'],
    devider: 'или'
};

export const platforms = {
    title: 'Платформа',
    data: ['PC','PlayStation 5','PlayStation 4','Xbox One','Xbox 360'],
    devider: 'или'
};

export const typeGames = {
    title: 'Режим игры',
    data: ['Компания','Мультиплеер','Кооператив','Зомби'],
    devider: 'или'
};

//SLIDERS
export const year = {
    title: 'Год выпуска',
    left: 1960,
    right: 2020,
    step: 5,
    desc: 'года'
};

export const duration = {
    title: 'Длительность фильма',
    left: 0,
    right: 200,
    step: 20,
    desc: 'мин'
};

export const durationSeries = {
    title: 'Длительность серии',
    left: 0,
    right: 120,
    step: 15,
    desc: 'мин'
};

export const budget = {
    title: 'Бюджет',
    left: 0,
    right: 225,
    step: 15,
    desc: 'млн $'
};

//MOODS
export const moods = [
    [
        {
            title: 'Позитивное',
            img: 'http://youcanchoose.ru/tpl/img/icon/8_50x50.png',
            color: '#448d0d'
        },
        {
            title: 'Рофляное',
            img: 'http://youcanchoose.ru/tpl/img/icon/21_50x50.png',
            color: '#cdb125'
        },
        {
            title: 'Под пиво',
            img: '../img/beer2_50x50.png',
            color: '#a25401'
        },
        {
            title: 'Романтик',
            img: 'http://youcanchoose.ru/tpl/img/icon/1_50x50.png',
            color: '#802758'
        }
    ],
    [
        {
            title: 'Грустное',
            img: 'http://youcanchoose.ru/tpl/img/icon/2_50x50.png',
            color: '#3c6db8'
        },
        {
            title: 'Скучное',
            img: 'http://youcanchoose.ru/tpl/img/icon/7_50x50.png',
            color: '#135289'
        },
        {
            title: 'Ностальгия',
            img: 'http://youcanchoose.ru/tpl/img/icon/17_50x50.png',
            color: '#097652'
        },
        {
            title: 'Депрессия',
            img: 'http://youcanchoose.ru/tpl/img/icon/20_50x50.png',
            color: '#0f3162'
        }
    ],
    [
        {
            title: 'Энергичное',
            img: 'http://youcanchoose.ru/tpl/img/icon/3_50x50.png',
            color: '#e17404'
        },
        {
            title: 'Мотивация',
            img: 'http://youcanchoose.ru/tpl/img/icon/14_50x50.png',
            color: '#880c0c'
        },
        {
            title: 'Новогоднее',
            img: 'http://youcanchoose.ru/tpl/img/icon/9_50x50.png',
            color: '#881111'
        },
        {
            title: 'Поучительное',
            img: 'http://youcanchoose.ru/tpl/img/icon/6_50x50.png',
            color: '#540d55'
        }
    ],
    [
        {
            title: 'Волшебное',
            img: 'http://youcanchoose.ru/tpl/img/icon/11_50x50.png',
            color: '#53419d'
        },
        {
            title: 'Мрачное',
            img: 'http://youcanchoose.ru/tpl/img/icon/10_50x50.png',
            color: '#5b3478'
        },
        {
            title: 'Таинственное',
            img: 'http://youcanchoose.ru/tpl/img/icon/13_50x50.png',
            color: '#380955'
        },
        {
            title: 'Мечтательное',
            img: 'http://youcanchoose.ru/tpl/img/icon/5_50x50.png',
            color: '#136b67'
        }
    ]
];

