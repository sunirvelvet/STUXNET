import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import '.././authStyles.css';

const Header = () => {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };


    return (
        <header className="header">
            <div className="header-top">
                <h1 className="header-title">S T U X n e t</h1>
                <div className="header-buttons">
                    {user ? (
                        <div className='welcome-logout'>
                            <p>{user.username}</p>
                            <button onClick={handleLogout} className="logout-button">Logout</button>
                        </div>
                    ) : (
                        <>
                            <Link to="/signup"><button className='signup-button'>Signup</button></Link>
                            <Link to="/login"><button className="login-button">Login</button></Link>
                        </>
                    )}
                </div>
            </div>
            <nav className="header-nav">
                    <a href="#live">Live</a>
                    <a href="#categories">Categories</a>
                    <a href="#forum">Forum</a>
                    <a href="#wallet">Wallet</a>
            </nav>
        </header>
    );
};

export default Header;
