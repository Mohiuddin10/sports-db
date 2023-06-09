import React, { useEffect, useState } from 'react';
import './Home.css';
import Players from '../Players/Players';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2'

const Home = () => {
    const [ players, setPlayers] = useState([]);
    const [search, setSearch] = useState('');
    const [ cart, setCart] = useState([]);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${search}`)
        .then(res => res.json())
        .then(data => setPlayers(data?.player))
    }, [search]);
    
const handleDelete = (id) => {
    const remainingPlayer = cart.filter(pd => pd.idPlayer !== id);
    setCart(remainingPlayer);
    toast("Wow so easy, deleted!");
    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
}

    return (
        <div className='home-container'>
            <div className="home-players">
                <input onChange={(e) => setSearch(e.target.value)} type="text" name="" id="" className='search-inp' placeholder='Player Name'/>
                <button className='search-btn'>Search</button>
                <div className="players-container">
                    <h1>Players found: ${players.length}</h1>
                   <Players players={players} cart={cart} setCart={setCart}/>
                </div>
            </div>
            <div className="home-cart">
                <h1>Cart</h1>
                {
                    cart?.map((p) => (
                        <div className="cart-container">
                            <li>{p.idPlayer}</li>
                            <button onClick={()=> handleDelete(p.idPlayer)} className='delete-btn'>Delete</button>
                            <ToastContainer />
                        </div>
                        
                    ))
                }
            </div>
        </div>
    );
};

export default Home;