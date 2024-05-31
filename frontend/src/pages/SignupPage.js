import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signupUser } from '../features/auth/authSlice';

const SignupPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { user, error } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/loggedin');
        }
    }, [user, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signupUser({ username, email, password })).then((response) => {
            console.log('Signup response:', response); // Log the response
        }).catch((error) => {
            console.error('Signup error:', error); // Log the error
        });
    };

    return (
        <div>
            <h1>STUXNET</h1>
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
                <button type="submit">Signup</button>
            </form>
            {error && <p>{error.error}</p>}
            <footer>Built by SUNIR</footer>
        </div>
    );
};

export default SignupPage;
