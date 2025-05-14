import React from 'react';

const BoardAdmin = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg border-0">
            <div className="card-body text-center">
              <h3 className="card-title text-primary fw-bold">Admin Board</h3>
              <p className="card-text mt-3">
                Bienvenido a la vista de administrador. Aquí puedes gestionar los recursos y supervisar las actividades de la plataforma.
              </p>
              <button className="btn btn-primary mt-4">Gestionar Usuarios</button>
              <button className="btn btn-outline-primary mt-4 ms-3">Ver Reportes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardAdmin;