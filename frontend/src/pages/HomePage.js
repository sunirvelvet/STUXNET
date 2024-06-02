import React from 'react';
import { Link } from 'react-router-dom';
import GamesList from '../components/GameList';

const HomePage = () => {

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

            <GamesList />
            <footer>Built by SUNIR</footer>
        </div>
    );
};

export default HomePage;
