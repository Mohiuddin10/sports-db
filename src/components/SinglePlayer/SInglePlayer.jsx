import React from 'react';
import './SinglePlayer.css';

const SInglePlayer = ({player, cart, setCart}) => {
    const {strName, strCutout, strGender, dateBorn, strBirthLocation, strHeight, strNationality, strSport} = player;
    const handleAddToCart = () => {
        
    }
    return (
        <div className='single-player-container'>
            <img src={strCutout ? strCutout : 'https://static.semrush.com/blog/uploads/files/7a/c4/7ac4acca6898c1bb4781b64dd751a8df/what-does-error-404-not-found-mean.svg'} alt="no-img" />
            <h3>Name: {strName}</h3>
            <h5>Gender: {strGender}</h5>
            <p>Date of Born: {dateBorn}</p>
            <p>Place of Birth: {strBirthLocation}</p>
            <p>Height: {strHeight}</p>
            <p>Nationality: {strNationality}</p>
            <p>Sport: {strSport}</p>
            <div className="btn-container">
            <button className='first-btn'>Details</button>
            <button className='middle-btn' onClick={handleAddToCart}>Add to Cart</button>
            <button className='last-btn'>Bookmark</button>  </div>        
        </div>
    );
};

export default SInglePlayer;