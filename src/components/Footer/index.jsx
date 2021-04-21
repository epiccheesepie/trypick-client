import React from 'react';
import './Footer.css';
import { menu } from '../../text';

function Footer(props) {
	React.useEffect(() => {
		props.page && document.querySelector('.footer').classList.add('page');
	});

	const renderMenu = menu.map( (val) => {
		const { title, search } = val;
		return (
			<ItemFooter key={title} title={title} search={search} />
		);
	});

	return (
		<div className="footer">
			<div className="container footer__wrap">
				<div className="footer__logo">
					<img className="logo" src="/img/logo.png" alt="logo" />
				</div>
				<div className="footer__menu">
					{renderMenu}
					<ul className="footer__column">
						<li><span className="column__title">Связаться с создателем</span></li>
						<li><span className="footer__link">boo-baa-boo@yandex.ru</span></li>
					</ul>
				</div>
				<div className="footer__bot">
					<div className="others">
						<span className="others__item">
							Некоторая информация взята с сайта <a className="footer__link" href="https://www.kinopoisk.ru/" alt='КиноПоиск'>КиноПоиск.</a>
						</span>
						<span className="others__item">
							Просмотр доступен с помощью сервиса <a className="footer__link" href="https://yohoho.cc/" alt='Yohoho'>Yohoho.</a>
						</span>
					</div>
					<div className="copy-text">
						<span className="copyright">Copyright © 2018-2021 YouCanChoose. Почти все права защищены.</span>
						<span className="age">18+</span>
					</div>
				</div>
			</div>
		</div>
	);
}

function ItemFooter(props) {
	const list_items = props.search.map( ({title, link}, index) => {
		return (
			<li key={title + index}>
				<a className="footer__link" href={link} alt={title}>
					{title}
				</a>
			</li>
		);
	});

	return (
		<ul className="footer__column">
			<li><span className="column__title">{props.title}</span></li>
			{list_items}
		</ul>
	);
}

export default Footer;