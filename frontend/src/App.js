import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import BoardUser from './components/BoardUser';
import BoardModerator from './components/BoardModerator';
import BoardAdmin from './components/BoardAdmin';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/user" element={<ProtectedRoute roles={['ROLE_USER']}><BoardUser /></ProtectedRoute>} />
          <Route path="/mod" element={<ProtectedRoute roles={['ROLE_MODERATOR']}><BoardModerator /></ProtectedRoute>} />
          <Route path="/admin" element={<ProtectedRoute roles={['ROLE_ADMIN']}><BoardAdmin /></ProtectedRoute>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;