import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../features/auth/authSlice';
import GamesList from '../components/GameList';


const LoggedInPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };


    return (
        <div>
            <h1>STUXNET</h1>
            {user && <p>Welcome, {user.username}!</p>}
            <button onClick={handleLogout}>Logout</button>
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

export default LoggedInPage;
