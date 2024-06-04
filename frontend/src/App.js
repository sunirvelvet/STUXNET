import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import LoggedInPage from './pages/LoggedInPage';
import ProtectedRoute from './components/ProtectedRoute';
import { Provider } from 'react-redux';
import { store } from './store';
import GamesList from './components/GameList'; // Ensure this path is correct

const App = () => (
    <Provider store={store}>
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/loggedin" element={<ProtectedRoute element={<LoggedInPage />} />} />
                    <Route path="/games" element={<GamesList />} /> {/* Added route for GamesList */}
                </Routes>
            </div>
        </Router>
    </Provider>
);

export default App;
