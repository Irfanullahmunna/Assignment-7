import React, { useState } from 'react';
import playerData from '../../data/bangladeshPlayerData.json';

import Player from '../Player/Player';
import Cart from '../Cart/Cart';


const PlayerList = () => {
    const [players, setPlayers] = useState(playerData);
    const [cart, setCart] = useState([]);
    const handleAddPlayer = (player) => {
    const newCart = [...cart, player];
    setCart(newCart);
    }

    return (
        
        <div className="main-container">

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            <div className="player-container">
                {
                    players.map(player => <Player
                    handleAddPlayer={handleAddPlayer}
                        player={player}
                        ></Player>)
                }
            </div>
        </div>
    );
};

export default PlayerList;