import React from 'react';
import AuthService from '../services/auth.service';

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Profile</h3>
              <p>
                <strong>Username:</strong> {currentUser.username}
              </p>
              <p>
                <strong>Email:</strong> {currentUser.email}
              </p>
              <p>
                <strong>Roles:</strong> {currentUser.roles.join(', ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;