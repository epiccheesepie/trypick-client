import React from 'react';
import './SearchButton.css';

const SearchButton = ({dropPointer, dropMobile, scroll}) => {

	const clickHandler = () => {
		dropPointer();
		dropMobile();
		scroll();
	};

	return (
		<div className="interface__button">
			<button className="search-button" type="submit" onClick={() => clickHandler()}>
				Найти
			</button>
		</div>
	);
}

export default SearchButton;