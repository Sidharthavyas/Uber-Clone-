import React from 'react'
import { Navigate } from 'react-router-dom';

const UserProtectedWrapper = ({ children }) => {
    const token = localStorage.getItem('token');
    
    // If no token exists, redirect to login using Navigate component
    if (!token) {
        return <Navigate to="/user-login" replace />;
    }
    
    // If token exists, render the children
    return children;
}

export default UserProtectedWrapper