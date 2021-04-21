import React from 'react';
import './MoodBlock.css'

const MoodBlock = ({data, onClickMood, moodActiveItems}) => {

    const checkboxes = data.map(({title,img,color}) => {
        return (
            <MoodCheckbox 
                key={title}
                title={title}
                img={img}
                color={color}
                onClickMood={onClickMood}
                checked={moodActiveItems.includes(title)}
            />
        );
    });

    return (
        <div className="menu__block">
            {checkboxes}
        </div>
    );
    
};

const MoodCheckbox = ({title, img, color, onClickMood, checked}) => {

    const style = {
        backgroundColor: color
    };

    return (
        <label className={`interface__mood ${checked ? 'checked' : ''}`}>
            <input className="mood__checkbox" type="checkbox" onClick={_ => onClickMood(title)} />
            <div className="mood__new-checkbox" style={style}>
                <img className="mood__img" src={img} alt={title} />
            </div>
            <span className="mood__text">
                {title}
            </span>
        </label>
    );
};

export default MoodBlock;