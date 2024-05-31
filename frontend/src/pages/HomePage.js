import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGames } from '../features/games/gameSlice';
import { Link } from 'react-router-dom';


const HomePage = () =>  {
    const dispatch = useDispatch();
    const games = useSelector((state) => state.games.games);

    useEffect(() => {
        dispatch(fetchGames());
    }, [dispatch]);


    return (
        <div>
            <h1>STUXNET</h1>
            <div>
                <Link to="/signup">
                <button>Signup</button>
                </Link>
                <Link to="/login">
                <button>Login</button>
                </Link>
            </div>
            <nav>
                <a href="#live">Live</a>
                <a href="#categories">Categories</a>
                <a href="#forum">Forum</a>
                <a href="#wallet">Wallet</a>
            </nav>

            <div>
                {games.map((game) => (
                    <div key={game.id}>
                        <img src={game.imageUrl} alt={game.title} />
                        <h2>{game.title}</h2>
                        <p>{game.description}</p>
                    </div>
                ))}
            </div>
            <footer>Built by SUNIR</footer>
        </div>
    );
};

export default HomePage;
