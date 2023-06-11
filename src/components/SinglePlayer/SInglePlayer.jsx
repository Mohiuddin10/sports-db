import React from 'react';
import './SinglePlayer.css';
import Swal from 'sweetalert2'
import { isDisabled } from '@testing-library/user-event/dist/utils';

const SInglePlayer = ({player, cart, setCart}) => {
    const {idPlayer, strCutout, strGender, dateBorn, strBirthLocation, strHeight, strNationality, strSport} = player;
    const handleAddToCart = () => {
        const info = {
            idPlayer, strCutout, strGender, dateBorn, strBirthLocation, strHeight, strNationality, strSport, price: 120
        }
        if (cart.length !== 0){
            const newCart = [...cart, info];
            setCart(newCart);
            Swal.fire(
                'Good job!',
                'You Player is added',
                'success'
              )
        }
        else {
            const newCart = [info];
            setCart(newCart); 
            Swal.fire(
                'Good job!',
                'Your first Player is added',
                'success'
              ) 
        }
        
    }

    const handleBookmark = () => {
        const info = {
            idPlayer, strCutout, strGender, dateBorn, strBirthLocation, strHeight, strNationality, strSport, quantity: 120, bookmark: true
        }
        
        const isExist = localStorage.getItem('bookmark');
        const parseIsExist = JSON.parse(isExist);
        if (parseIsExist) {
            const doubleExist = parseIsExist.find(p => p.idPlayer === idPlayer );
            if (doubleExist){
                const updateQuantity = parseFloat(doubleExist.quantity) + 1;
                doubleExist.quantity = updateQuantity;
                
                localStorage.setItem('bookmark', JSON.stringify(parseIsExist))
                console.log(updateQuantity);
            }
            else {
                localStorage.setItem('bookmark', JSON.stringify([...parseIsExist, info]))
            }
            
        }
        else {
            localStorage.setItem('bookmark', JSON.stringify([info]))
        }

    }
    
    return (
        <div className='single-player-container' data-aos='fade-up'>
            <img src={strCutout ? strCutout : 'https://static.semrush.com/blog/uploads/files/7a/c4/7ac4acca6898c1bb4781b64dd751a8df/what-does-error-404-not-found-mean.svg'} alt="no-img" />
            <h3>Name: {idPlayer}</h3>
            <h5>Gender: {strGender}</h5>
            <p>Date of Born: {dateBorn}</p>
            <p>Place of Birth: {strBirthLocation}</p>
            <p>Height: {strHeight}</p>
            <p>Nationality: {strNationality}</p>
            <p>Sport: {strSport}</p>
            <div className="btn-container">
            <button className='first-btn'>Details</button>
            <button className='middle-btn' onClick={handleAddToCart}>Add to Cart</button>
            <button className='last-btn' onClick={handleBookmark}>Bookmark</button>  </div>        
        </div>
    );
};

export default SInglePlayer;


// task:
// 1. when click on bookmark, bookmark button will be isDisabled
// 2. one player can not add in cart more then one
// 3. three button set in fixed place i.e. buttom of the card