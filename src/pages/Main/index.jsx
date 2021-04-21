import React from 'react';
import { menu } from '../../text';
import './Main.css';

const Main = _ => {
	const renderMenu = menu.map( ({title, css, search}) => {
		return (
			<Item key={title} className={css} title={title} search={search} />
		);
	});

	return (
		<React.Fragment>
			{renderMenu}
		</React.Fragment>
	);
}

const Item = ({title, className, search}) => {
	const renderBoxes = search.map( ({title, img, link}) => {
		return (
			<Box 
				key={title}
				title={title}
				img={img}
				link={link}
			/>
		);
	});

	return (
		<div className={`item-page ${className}`}>
			<div className="item-page__title">
				<span className="big-text">{title}</span>
			</div>
			<div className="item-page__boxes">
				<div className="container boxes__wrap">
					{renderBoxes}
				</div>
			</div>
		</div>
	);
}

const Box = ({title, img, link}) => {
	
	return (
		<a className="box" href={link}>
			<div className="box__img">
				<img src={img} alt={title} />
			</div>
			<div className="box__title">
				<span>{title}</span>
			</div>
		</a>
	);
}

export default Main;