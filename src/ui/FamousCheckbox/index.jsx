import React from 'react';
import './FamousCheckbox.css';

const FamousCheckbox = ({typeRus, onClick, famousCheck}) => {

    return (
        <div className="interface__famous">
            <label className="famous__label">
                <input className="famous__checkbox" type="checkbox" onClick={_ => onClick()} checked={famousCheck} />
                <span className="famous__new-checkbox"></span>
                <span className="famous__text">
                    Искать только малоизвестные {typeRus}
                </span> 
            </label>
        </div>
    );
};

export default FamousCheckbox;