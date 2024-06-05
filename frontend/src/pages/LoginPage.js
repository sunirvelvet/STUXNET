import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser, resetError } from '../features/auth/authSlice';
import '../authStyles.css';

const LoginPage = () => {
    const [emailOrUsername, setEmailOrUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { user, error } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(resetError());
    }, [dispatch]);

    useEffect(() => {
        if (user) {
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
        <div className="auth-page">
            <h1 ><Link to="/" className='home-link'>S T U X n e t</Link></h1>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Email or Username"
                        value={emailOrUsername}
                        onChange={(e) => setEmailOrUsername(e.target.value.trim())}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="authbutton">Login</button>
                </form>
                {error && <p className="error-message">{error.error}</p>}
                <p className="ask">
                    Not a Stuxnet member? <Link to="/signup" className="link-white">Signup</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
