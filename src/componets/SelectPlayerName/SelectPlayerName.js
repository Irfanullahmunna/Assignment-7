import React from 'react';
import './SelectPlayerName.css';

const SelectPlayerName = (props) => {
    return (
        <div className="item-center">
            <img src={props.player.image} alt=""/>
            <h4 className="select-name">{props.player.name}</h4>
        </div>
    );
};

export default SelectPlayerName;