import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../features/auth/authSlice';
import Header from '../components/Header';
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
            <Header isLoggedIn={true} handleLogout={handleLogout} user={user} />
            <GamesList />
            <footer>Built by SUNIR</footer>
        </div>
    );
};

export default LoggedInPage;
