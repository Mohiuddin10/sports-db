import React from 'react';
import './Players.css';
import SInglePlayer from '../SinglePlayer/SInglePlayer';

const Players = ({players, cart, setCart}) => {
    
    
    return (
        <div className='players-container-1'>
            {
              players.map(player => <SInglePlayer player={player}
                key={player.idPlayer} cart={cart} setCart={setCart}
                />)  
            }
            
        </div>
    );
};

export default Players;