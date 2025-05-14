import React from 'react';

const BoardUser = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg border-0">
            <div className="card-body text-center">
              <h3 className="card-title text-info fw-bold">User Board</h3>
              <p className="card-text mt-3">
                Bienvenido a tu panel de usuario. Aquí puedes ver tu información y acceder a las funcionalidades disponibles.
              </p>
              <button className="btn btn-info mt-4">Actualizar Perfil</button>
              <button className="btn btn-outline-info mt-4 ms-3">Ver Actividades</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardUser;