import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


const ProtectedRoute = ({ element }) => {
    const { user } = useSelector((state) => state.auth);

    return user ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
