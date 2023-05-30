import React from 'react';
import './SinglePlayer.css';

const SInglePlayer = ({player}) => {
    console.log(player);
    return (
        <div className='single-player-container'>
            <img src={player.strCutout ? player.strCutout : 'https://static.semrush.com/blog/uploads/files/7a/c4/7ac4acca6898c1bb4781b64dd751a8df/what-does-error-404-not-found-mean.svg'} alt="no-img" />
            <h5>Gender: {player.strGender}</h5>
            <p>Date of Born: {player.dateBorn}</p>
            <p>Place of Birth: {player.strBirthLocation}</p>
            <p>Height: {player.strHeight}</p>
            <p>Nationality: {player.strNationality}</p>
            <p>Sport: {player.strSport}</p>
            <div className="btn-container">
            <button className='first-btn'>Details</button>
            <button className='middle-btn'>Add to Cart</button>
            <button className='last-btn'>Bookmark</button>  </div>        
        </div>
    );
};

export default SInglePlayer;