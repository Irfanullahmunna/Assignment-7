import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Player.css';

const Player = (props) => {
    const {id, name, role, age, image, salary, birthPlace} = props.player;
    return (
        <div className="center">
            <div className="player">
                <div className="player-image">
                    <img src={image} alt=""/>
                </div>
                <div className="player-information">
                    <h1 className="player-name">{name}</h1>
                    <h2>{role}</h2>
                    <h4>Age: {age}</h4>
                    <h4>Birth Place: {birthPlace}</h4>
                    <h4>Salary: {salary}</h4>
                    <button
                        className="player-button p-2"
                        onClick={() => props.handleAddPlayer(props.player)}
                        >
                        <FontAwesomeIcon icon={faPlus}/>Add to Team
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Player;