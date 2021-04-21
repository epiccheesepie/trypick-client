import React from 'react';
import './Text.css';

const Text = ({onChange, query, searchRef}) => {
    return (
        <div className="similar">
            <input ref={searchRef} type="text" maxLength="50" placeholder="Хочу найти..." value={query} onChange={(e) => onChange(e)} /> 
        </div>
    );
};

export default Text;