const search_films = [
		{title: 'Поиск по параметрам', img: 'img/icon_props.png', link: '/params/films'},
		{title: 'Поиск по настроению', img: 'img/icon_mood.png', link: '/mood/films'},
		{title: 'Поиск по сюжету', img: 'img/icon_plot.png', link: '#'},
		{title: 'Случайный фильм', img: 'img/icon_rand.png', link: '/random/films'},
		{title: 'Похожий фильм', img: 'img/icon_some.png', link: '#'},
];

const search_series = [
		{title: 'Поиск по параметрам', img: 'img/icon_props.svg', link: '/params/series'},
		{title: 'Поиск по настроению', img: 'img/icon_mood.svg', link: '/mood/series'},
		{title: 'Поиск по сюжету', img: 'img/icon_plot.svg', link: '#'},
		{title: 'Случайный сериал', img: 'img/icon_rand.svg', link: '/random/series'},
		{title: 'Похожий сериал', img: 'img/icon_some.svg', link: '#'},
];

const search_games = [
		{title: 'Поиск по параметрам', img: 'img/icon_props.svg', link: '/params/games'},
		{title: 'Поиск по настроению', img: 'img/icon_mood.svg', link: '#'},
		{title: 'Поиск по сюжету', img: 'img/icon_plot.svg', link: '#'},
		{title: 'Случайная игра', img: 'img/icon_rand.svg', link: '/random/games'},
		{title: 'Похожая игра', img: 'img/icon_some.svg', link: '#'},
];

export const menu = [
	{css: 'item-page--left films', title: 'Фильмы', search: search_films},
	{css: 'item-page--right series--left', title: 'Сериалы', search: search_series},
	{css: 'item-page--left games', title: 'Игры', search: search_games}
];
