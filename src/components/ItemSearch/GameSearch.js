import React from 'react';
import './ItemSearch.css';
import YouTube from '@u-wave/react-youtube';
import youtubeId from '../../utils/youtubeId';
import Modal from './Modal';

function GameSearch({options}) {

	const {
        name, picture, year,
        company, companyImg, platform, genre, mode,
        descrip, sR,
        trailer,
        ratePG, rateKanob, rateYCC
	} = options;

	const trailerId = youtubeId(trailer);
	const [modalActive, setModalActive] = React.useState(false);

	return (
		<div className="item-search">
			<div className="item-search__title">
				<span className="item-search__rus">{name}</span>
			</div>
			<div className="item-search__content">
				<div className="item-search__foto">
					<img src={picture} alt={picture} />
				</div>
				<div className="item-search__info">
					<div className="info__text">
						<div className="info__rate">
							<span className="rate__title">Рейтинги:</span>
							<span className="rate__kinop">Playground: {ratePG}</span>
							<span className="rate__imdb">Kanobu: {rateKanob}</span>
							<span className="rate__ycc">YCC: {rateYCC}</span>
						</div>
						<div className="info__item">
							<span className="info__static">Название:</span>
							<span className="info__changed">{name}</span>
						</div>
						<div className="info__item">
							<span className="info__static">Платформа:</span>
							<span className="info__changed">{platform}</span>
						</div>
						<div className="info__item">
							<span className="info__static">Разработчик:</span>
							<span className="info__changed">{company}</span>
						</div>
						<div className="info__item">
							<span className="info__static">Год выхода:</span>
							<span className="info__changed">{year}</span>
						</div>
						<div className="info__item">
							<span className="info__static">Жанр:</span>
							<span className="info__changed">{genre}</span>
						</div>
						<div className="info__item">
							<span className="info__static">Режимы игры:</span>
							<span className="info__changed">{mode}</span>
						</div>
						<div className="info__item">
							<span className="info__static">Минимальные С/Т:</span>
							<span className="info__changed">{sR}</span>
						</div>
						<div className="info__item">
							<span className="info__changed">{descrip}</span>
						</div>
					</div>
					<div className="info__add">
						<a className="info__trailer button" onClick={() => setModalActive(true)}>
							<svg xmlns="http://www.w3.org/2000/svg" width="22" height="26" viewBox="0 0 22 26"><path fill="none" fillRule="evenodd" stroke="#FFF" strokeWidth="1.926" d="M20.107 13L.963 24.312V1.688L20.107 13z"></path></svg>
							<span className="trailer__text">Трейлер</span>
						</a>
						{companyImg && (
							<img className="info__brand" src={companyImg} alt="company" />
						)}
					</div>
				</div>
			</div>
			{modalActive && (
				<Modal active={modalActive} setActive={setModalActive}>
					<YouTube 
						video={trailerId}
						className="youtube"
					/>
				</Modal>
			)}
		</div>
	);
}

export default GameSearch;