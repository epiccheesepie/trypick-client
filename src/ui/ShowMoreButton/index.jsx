import React from 'react';
import './ShowMoreButton.css';

function ShowMoreButton({onClick, pointer}) {
	return (
        <div className="list__more">
            <button className="button button--more" onClick={(e) => onClick(e, pointer)}>
                <span>Показать еще</span>
            </button>
        </div>
	);
}

export default ShowMoreButton;