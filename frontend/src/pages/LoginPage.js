import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../features/auth/authSlice';

const LoginPage = () => {
    const [emailOrUsername, setEmailOrUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { user, error } = useSelector((state) => state.auth);
    const navigate = useNavigate();


    useEffect(() => {
        if (user){
            navigate('/loggedin');
        }
    }, [user, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login input:', { emailOrUsername, password });
        dispatch(loginUser({ emailOrUsername, password })).then((response) => {
            console.log('Login response:', response); // Log the response
        }).catch((error) => {
            console.error('Login error:', error); // Log the error
        });
    };

    return (
        <div>
            <h1>STUXNET</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Email or Username"
                    value={emailOrUsername}
                    onChange={(e) => setEmailOrUsername(e.target.value.trim())}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            {error && <p>{error.error}</p>}
            <footer>Built by SUNIR</footer>
        </div>
    );
};

export default LoginPage;
