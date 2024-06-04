import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import GamesList from '../components/GameList';

const HomePage = () => {

    return (
        <div>
            <Header />
            <GamesList />
            <footer>Built by SUNIR</footer>
        </div>
    );
};

export default HomePage;
