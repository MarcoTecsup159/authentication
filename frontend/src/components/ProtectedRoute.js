import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthService from '../services/auth.service';

const ProtectedRoute = ({ children, roles }) => {
  const currentUser = AuthService.getCurrentUser();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  if (roles && !roles.some((role) => currentUser.roles.includes(role))) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;