import React from 'react';
import './ItemSearch.css';
import YouTube from '@u-wave/react-youtube';
import youtubeId from '../../utils/youtubeId';
import Modal from './Modal';

function SeriesSearch({options}) {

	const {
		name, nameEng, picture, 
		duration, year, country, 
		genre, rej, writ, actors, 
		descrip, creator, companyImg,
		trailer,
		rateKP, rateiMDb, rateYCC		
	} = options;

	const trailerId = youtubeId(trailer);
	const [modalActive, setModalActive] = React.useState(false);

	return (
		<div className="item-search">
			<div className="item-search__title">
				<span className="item-search__rus">{name}</span>
				<span className="item-search__eng">{nameEng}</span>
			</div>
			<div className="item-search__content">
				<div className="item-search__foto">
					<img src={picture} alt={picture} />
				</div>
				<div className="item-search__info">
					<div className="info__text">
						<div className="info__rate">
							<span className="rate__title">Рейтинги:</span>
							<span className="rate__kinop">КиноПоиск: {rateKP}</span>
							<span className="rate__imdb">IMDb: {rateiMDb}</span>
							<span className="rate__ycc">YCC: {rateYCC}</span>
						</div>
						<div className="info__item">
							<span className="info__static">Название:</span>
							<span className="info__changed">{name}</span>
						</div>
						<div className="info__item">
							<span className="info__static">Страна производства:</span>
							<span className="info__changed">{country}</span>
						</div>
						<div className="info__item">
							<span className="info__static">Год выпуска:</span>
							<span className="info__changed">{year}</span>
						</div>
						<div className="info__item">
							<span className="info__static">Длительность:</span>
							<span className="info__changed">{duration} мин.</span>
						</div>
						<div className="info__item">
							<span className="info__static">Жанр:</span>
							<span className="info__changed">{genre}</span>
						</div>
						<div className="info__item">
							<span className="info__static">Режиссёры:</span>
							<span className="info__changed">{rej}</span>
						</div>
						<div className="info__item">
							<span className="info__static">Сценаристы:</span>
							<span className="info__changed">{writ}</span>
						</div>
						<div className="info__item">
							<span className="info__static">Основные актеры:</span>
							<span className="info__changed">{actors}</span>
						</div>
						<div className="info__item">
							<span className="info__static">Создатель:</span>
							<span className="info__changed">{creator}</span>
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

export default SeriesSearch;