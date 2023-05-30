import React, { useEffect, useState } from 'react';
import './Home.css';
import Players from '../Players/Players';

const Home = () => {
    const [ players, setPlayers] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${search}`)
        .then(res => res.json())
        .then(data => setPlayers(data?.player))
    }, [search]);
    return (
        <div className='home-container'>
            <div className="home-players">
                <input onChange={(e) => setSearch(e.target.value)} type="text" name="" id="" className='search-inp' placeholder='Player Name'/>
                <button className='search-btn'>Search</button>
                <div className="players-container">
                    <h1>Players found: ${players.length}</h1>
                   <Players players={players}/>
                </div>
            </div>
            <div className="home-cart">
                <h1>Cart</h1>
            </div>
        </div>
    );
};

export default Home;