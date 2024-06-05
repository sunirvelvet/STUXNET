import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signupUser,resetError } from '../features/auth/authSlice';
import '../authStyles.css';

const SignupPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
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
        dispatch(signupUser({ username, email, password })).then((result) => {
            if (signupUser.fulfilled.match(result)) {
                navigate('/loggedin');
            }
        });
    };

    return (
        <div className="auth-page">
            <h1 ><Link to="/" className='home-link'>S T U X n e t</Link></h1>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="authbutton">Signup</button>
                </form>
                {error && <p className="error-message">{error.error}</p>}
                <p className='ask'>
                    Already have an account? <Link to="/login" className="link-white">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignupPage;
