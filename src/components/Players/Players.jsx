import React from 'react';
import './Players.css';
import SInglePlayer from '../SinglePlayer/SInglePlayer';

const Players = ({players}) => {
    
    console.log(players);
    return (
        <div className='players-container-1'>
            {
              players.map(player => <SInglePlayer player={player}
                key={player.idPlayer}
                />)  
            }
            
        </div>
    );
};

export default Players;